const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.subAccountTransferHistory(
  {
    toEmail: 'alice@test.com'
  }
).then(response => console.log(response.data))
  .catch(error => console.log(error))
