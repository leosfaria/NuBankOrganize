var fetch = require('node-fetch');

module.exports = {
    nuDiscovery: async () => {
        const response = await fetch("https://prod-s0-webapp-proxy.nubank.com.br/api/discovery")
        
        const urls = response.json()
        
        return urls
    },
    nuDiscoveryAPP: async () => {
        const response = await fetch("https://prod-s0-webapp-proxy.nubank.com.br/api/app/discovery")
        
        const urls = response.json()
        
        return urls
    }
}
