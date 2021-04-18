const router = require("express").Router();

router.post('/auth/login',(req,res,next)=>{
    console.log(req.body)
    const { username } = req.body
    res.json({
        code:2000,
        msg:'ok',
        data:{
            accessToken:`${username}adsadswee313sddq`
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