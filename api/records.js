const router = require("express").Router();
const faker = require('faker');

const sourceType = ['UNKNOWN','VN_RTSP','VN_ONVIF','FC_SENSEPASS']
faker.locale = "zh_CN";
function generateData(len){
    let list=[]
    for (let i = 0; i < len; i++) {
        list.push({
            "name": faker.name.findName(),
            "time":faker.datatype.datetime(),
            "avatar":faker.image.avatar(),
            "capture":'/img/human.jpg',
            "similarity":faker.datatype.float(),
            "uuid":faker.datatype.uuid(),
            "device": {
              name:faker.name.jobArea(),
              position:faker.address.streetAddress()
            },
            "attr":[
              faker.vehicle.type(),
              faker.vehicle.type(),
              faker.vehicle.type(),
              faker.vehicle.type(),
            ],
            "email":faker.internet.email(),
        })
    }
    return list
}


router.get('/records/list',(req,res,next)=>{
  console.log(req.query)
  let len = parseFloat(req.query.limit) || 10
    res.json({
        code:2000,
        msg:'ok',
        data:{
          list:generateData(len)
        }
    })
})


module.exports = router