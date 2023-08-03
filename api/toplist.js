const router = require("express").Router();
const {faker} = require('@faker-js/faker');
console.warn(faker)
function generateData(len){
    let list=[]
    for (let i = 0; i < len; i++) {
        list.push({
          "name": faker.person.firstName(),
          "portrait": faker.image.avatar(),
          "time": faker.date.anytime(),
          "value": faker.number.int({ max: 10000 }).toFixed(0),
          "progress":faker.number.float(100).toFixed(2),
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
          "time": faker.date.anytime(),
          "icon": faker.number.int(10)
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