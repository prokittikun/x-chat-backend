// init express project
const express = require('express');
const ogs = require('open-graph-scraper');
// env
require('dotenv').config();

const app = express();

// init body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// init cors
const cors = require('cors');
app.use(cors());

// http request
app.post('/checkIsUrl', async (req, res) => {
    const url = req.body.url;
    const options = { url };
    ogs(options).then((resp) => {
        console.log("success");
        return res.send(resp.result);
    }).catch((err) => {
        console.log("err");
        return res.send(err);
     });

});

// listen to port
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});