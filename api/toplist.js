const router = require("express").Router();
const faker = require('faker');



function generateData(len){
    let list=[]
    for (let i = 0; i < len; i++) {
        list.push({
          "name": faker.name.firstName(),
          "portrait": faker.image.avatar(),
          "time": faker.datatype.datetime(),
          "value": faker.datatype.number(),
          "progress":faker.datatype.number(100),
        })
    }
    return list
}


router.get('/top/list',(req,res,next)=>{
    res.json({
        code:2000,
        msg:'ok',
        data:{
            list:generateData(5)
        }
    })
})


module.exports = router