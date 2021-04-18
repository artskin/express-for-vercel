const router = require("express").Router();


router.post('/login',(req,res,next)=>{
    console.log(req.body)
    res.json({
        code:2000,
        data:{
            token:''
        },
        msg:'ok'
      })
})


module.exports = router