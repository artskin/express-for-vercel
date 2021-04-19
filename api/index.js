const express = require("express");
const app = express();
const cors = require('cors')
const port = 3301;
// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
// base-header-setting
app.use(cors())
app.use((req,res,next)=>{
    console.log(req.url,req.body)
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
//     res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
//     //res.setHeader("X-Powered-By",'3.2.1')
//     //if(req.method ==='OPTIONS') res.send(200);
//     //else
next();
})
// Home route
app.get("/", (req, res) => {
    res.send("Welcome to a basic express App");
});

const auth = require('./auth')
const user = require('./user')
const tasklist = require('./tasklist')
const statistics = require('./statistics')

app.use('/api',auth)
app.use('/api',user)
app.use('/api',tasklist)
app.use('/api',statistics)

app.listen(port, () => {
    console.log(`Server is on ${port} Visit http://localhost:${port}`);
});