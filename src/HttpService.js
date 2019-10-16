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
    },
    nuLogin: async (loginUrl, cpf, password) => {
        const loginPayload  = {
            "grant_type": "password",
            "login": cpf,
            "password": password,
            "client_id": "other.conta",
            "client_secret": "yQPeLzoHuJzlMMSAjC-LgNUJdUecx8XO"
        }

        const response = await fetch(loginUrl, {
            method: 'post',
            body:    JSON.stringify(loginPayload),
            headers: { 'Content-Type': 'application/json', 'User-Agent': 'leosfaria Organize - https://github.com/leosfaria/NuBankOrganize' }
        })
        
        return response.json()
    },
    authenticateWithQrCode: async (liftUrl, qrCodeData, accessToken) => {
        const headers = {
            "Authorization": "Bearer " + accessToken,
            "Content-Type": "application/json", 
            'User-Agent': 'leosfaria Organize - https://github.com/leosfaria/NuBankOrganize'
        }

        const payload = {
            'qr_code_id': qrCodeData,
            'type': 'login-webapp'
        }

        const response = await fetch(liftUrl, {
            method: 'post',
            body:    JSON.stringify(payload),
            headers
        })
        
        return response.json()
    },
    getCardFeed: async (accessToken, feedUrl) => {
        const headers = {
            "Authorization": "Bearer " + accessToken,
            "Content-Type": "application/json", 
            'User-Agent': 'leosfaria Organize - https://github.com/leosfaria/NuBankOrganize'
        }

        const response = await fetch(feedUrl, { headers })
        
        const feed = response.json()
        
        return feed
    }
}
