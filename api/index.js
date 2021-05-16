const express = require("express");
const app = express();
const cors = require('cors')
const {verifyToken} = require('./token.js');
const port = 3301;

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
// base-header-setting
app.use(cors())
//api校验
const whiteList = ['/','/api/login','/api/reg','/api/captcha','/api/auth/login']
app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
//     res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
//     //res.setHeader("X-Powered-By",'3.2.1')
//     //if(req.method ==='OPTIONS') res.send(200);
//     //else
    if(req.url.includes('api') && !whiteList.includes(req.url)){
        verifyToken(req.headers.authorization).then(res =>{
            next()
        }).catch(err=>{
            res.status = 401
            res.json({
                code:401,
                message:'token过期或无效'
            })
        })
    } else {
        next()
    }
})
// Home route
app.get("/", (req, res) => {
    res.send("Welcome to a basic express App");
});

const auth = require('./auth')
const user = require('./user')
const tasklist = require('./tasklist')
const statistics = require('./statistics')
const toplist = require('./toplist')
const records = require('./records')

app.use('/api',auth)
app.use('/api',user)
app.use('/api',tasklist)
app.use('/api',toplist)
app.use('/api',statistics)
app.use('/api',records)

app.listen(port, () => {
    console.log(`Server is on ${port} Visit http://localhost:${port}`);
});