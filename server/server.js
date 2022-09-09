const path = require('path');
// const https = require('https')
// const fs = require('fs')

const express = require('express');
const favicon = require('serve-favicon')
const app = express();

const port = process.env.PORT || 3030;
const publicPath = path.join(__dirname, "..", "dist");

// const privateKey = fs.readFileSync(__dirname + '/../ssl/server.key', 'utf-8')
// const certificate = fs.readFileSync(__dirname + '/../ssl/server.crt', 'utf-8')

// const credentials = { key: privateKey, cert: certificate }

app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, '..', 'public', 'outside.png')))
app.use(favicon(path.join(__dirname, '..' ,'public', 'favicon.ico')))


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

 app.listen(port, () => {
    console.log(`http - listening on port ${port}`);
})

// const httpsServer = https.createServer(credentials, app)

// httpsServer.listen(port, () => {
//     console.log(`https - listening on port ${port}`)
// })

