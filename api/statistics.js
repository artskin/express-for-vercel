const router = require("express").Router();

const itemNames = ['Visitor','Saler','Viper','Stranger']
const itemIcons = ['data-line','coin','sell','user'];//el-icon-
const zfItems = ['-','+']

function generateData(){
    let list=[]
    for (let i = 0; i < 4; i++) {
        list.push({
          "name": itemNames[i] || 'default',
          "value": Math.floor(Math.random()*10000),
          "percent": zfItems[Math.round(Math.random())]+Math.floor(Math.random()*100)/100,
          "icon":itemIcons[i]
        })
    }
    return list
}


router.get('/statistics',(req,res,next)=>{
    res.json({
        code:2000,
        msg:'ok',
        data:{
            list:generateData()
        }
    })
})


module.exports = router