
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch');

app.get('/accounts/TrueUSD/state', async function (req, res) {
    try {
        const response = await fetch("https://core-api.real-time-attest.trustexplorer.io/accounts/TrueUSD/state");
        const body = await response.json();
        res.status(200).send(body);
    } catch (err) {
        res.status(400).send('fail add callback users ' + err);
    }
})

app.use(bodyParser)
app.use(cors())
module.exports = app.listen(8080, function () {
    console.log('start report steemit user data on port 8080')
})
app.set('trust proxy', true)

