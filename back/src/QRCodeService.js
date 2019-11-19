var qrCode = require('qrcode-terminal');
var uuid = require('uuid/v4');

module.exports = {
    showQRCode: () => {
        const qrCodeData = uuid()

        qrCode.generate(qrCodeData)

        return qrCodeData
    }
}