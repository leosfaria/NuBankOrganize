var commandLineArgs = require('command-line-args')
var readline = require('readline-sync')
var fs = require('fs')
var httpService = require('./HttpService')
var qrCodeService = require('./QRCodeService')

const optionDefinitions = [
    { name: 'cpf', type: String },
    { name: 'password', alias: 'p', type: String }
];

async function login() {
    const discoveryUrls = await httpService.nuDiscovery() 
    const discoveryAPPUrls = await httpService.nuDiscoveryAPP() 

    const loginCredentials = await httpService.nuLogin(discoveryUrls.login, options.cpf, options.password)
    
    if(loginCredentials.error) {
        console.log("Something goes wrong: " + loginCredentials.error)
        process.exit(1)
    }

    console.log("Logado!")

    const qrCodeData = qrCodeService.showQRCode()

    readline.keyInPause("Após scanear o QRCode com o app, aperte qualquer tecla sem ser o enter... ¯\\_(ツ)_/¯")

    const authenticatedData = await httpService.authenticateWithQrCode(discoveryAPPUrls.lift, qrCodeData, loginCredentials.access_token)

    if(authenticatedData.error) {
        console.log("Something goes wrong 2: " + authenticatedData.error)
        process.exit(1)
    }

    const dataToFile = {
        accessToken: authenticatedData.access_token,
        feedUrl: authenticatedData._links.events.href
    }

    fs.writeFileSync('./.nubankConfigrc', JSON.stringify(dataToFile, null, 2) )
}

async function getFeed() {
    const authenticatedData = JSON.parse(fs.readFileSync('./.nubankConfigrc'))
    console.log(authenticatedData)

    return await httpService.getCardFeed(authenticatedData.accessToken, authenticatedData.feedUrl )
}

async function main (){
    const options = commandLineArgs(optionDefinitions);

    if(!fs.existsSync('./.nubankConfigrc')) {
        await login()
    }

    const feed = await getFeed()

    if(feed.error) {
        console.log("Can't get feed: " + feed.error)
        console.log("Login maybe expired")
        login()
        feed = await getFeed()
    }
    
    console.log(feed.events.find(e => e.id === "5d8cee40-8026-4f6d-a4f9-61965f24c63e" ))
}

main();