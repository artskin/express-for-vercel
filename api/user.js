const router = require("express").Router();

const userList = require('./userdata.json')

router.get('/userlist',(req,res,next)=>{
    res.json({
        code:2000,
        data:userList,
        msg:'ok'
    })
})
router.get('/userinfo',(req,res,next)=>{
    let {uid} = req.query
    if(uid){
        userList.map(item=>{
            if(item.id == uid){
                res.json({
                    code:2000,
                    data:item,
                    msg:'ok'
                })
            }
        })
    }else{
        res.statusCode = 400
        res.json({
            code:4000,
            data:null,
            msg:'缺少参数'
        })
    }
    
})


module.exports = router