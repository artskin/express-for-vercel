const express = require("express");
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const port = 3301;
// Body parser
//app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
// Home route
app.get("/", (req, res) => {
    res.send("Welcome to a basic express App");
});

const auth = require('./auth')
const user = require('./user')
const tasklist = require('./tasklist')
const statistics = require('./statistics')
const records = require('./records')

app.use('/api',auth)
app.use('/api',user)
app.use('/api',tasklist)
app.use('/api',statistics)
app.use('/api',records)

app.listen(port, () => {
    console.log(`Server is on ${port} Visit http://localhost:${port}`);
});