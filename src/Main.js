var commandLineArgs = require('command-line-args')
var readline = require('readline-sync')
var httpService = require('./HttpService')
var qrCodeService = require('./QRCodeService')

const optionDefinitions = [
    { name: 'cpf', type: String },
    { name: 'password', alias: 'p', type: String }
];

async function main (){
    const options = commandLineArgs(optionDefinitions);

    const discoveryUrls = await httpService.nuDiscovery() 
    const discoveryAPPUrls = await httpService.nuDiscoveryAPP() 

    const loginCredentials = await httpService.nuLogin(discoveryUrls.login, options.cpf, options.password)
    console.log(loginCredentials)

    if(loginCredentials.error) {
        console.log("Something goes wrong: " + loginCredentials.error)
        process.exit(1)
    }

    const qrCodeData = qrCodeService.showQRCode()

    readline.keyInPause("Após scanear o QRCode com o app, aperte qualquer tecla sem ser o enter... ¯\\_(ツ)_/¯")

    const authenticatedData = await httpService.authenticateWithQrCode(discoveryAPPUrls.lift, qrCodeData, loginCredentials.access_token)

    if(authenticatedData.error) {
        console.log("Something goes wrong: " + loginCredentials.error)
        process.exit(1)
    }

    console.log("Foi!!")

    const feed = httpService.getCardFeed(authenticatedData.access_token, authenticatedData._links.events.href )

    console.log(feed)
}

main();