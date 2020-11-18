const express = require('express');
const {
    dirname
} = require('path');

const app = express();

app.all('/blod', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.sendFile(`${__dirname}/第二个页面.html`);

})
app.listen(8800, () => {
    console.log('8800 listening on');
})