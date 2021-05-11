
const router = require("express").Router();
const userList = require('./userdata.json')
const {createToken} = require('./token.js');

router.post('/auth/login',(req,res,next)=>{
    console.log(req.body)
    const { username } = req.body;
    let token = createToken(req.body);
    let uid=""
    userList.map(item=>{
        if(username == item.username){
            uid = item.id
        }
    })
    
    res.json({
        code:2000,
        msg:'ok',
        data:{
            uid:uid,
            accessToken:`${token}`
        }
    })
})

router.post('/auth/logout',(req,res,next)=>{
    const { username } = req.body
    res.json({
        code:2000,
        msg:'ok',
        data:{
            accessToken:``
        }
      })
})


module.exports = router