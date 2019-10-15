var commandLineArgs = require('command-line-args');
var httpService = require('./HttpService')

const optionDefinitions = [
    { name: 'cpf', type: String },
    { name: 'password', alias: 'p', type: String }
];

async function main (){
    const options = commandLineArgs(optionDefinitions);

    const discoveryUrls = await httpService.nuDiscovery() 
    const discoveryAPPUrls = await httpService.nuDiscoveryAPP() 

    console.log(options)
    console.log(discoveryUrls.login)
    console.log("Te")
}

main();