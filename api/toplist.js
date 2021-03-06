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
    list.map(item=>{
        item.value = item.progress*103;
    })
    list.sort((a,b) => b['progress'] - a['progress'])
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

function generateData2(len){
    let list=[]
    for (let i = 0; i < len; i++) {
        list.push({
          "title": faker.commerce.productName(),
          "intro": faker.commerce.productDescription(),
          "time": faker.datatype.datetime(),
          "icon": faker.datatype.number()
        })
    }
    return list
}


router.get('/top/items',(req,res,next)=>{
    res.json({
        code:2000,
        msg:'ok',
        data:{
            list:generateData2(5)
        }
    })
})


module.exports = router