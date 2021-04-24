const router = require("express").Router();
const faker = require('faker');

const sourceType = ['UNKNOWN','VN_RTSP','VN_ONVIF','FC_SENSEPASS']

function generateData(len){
    let list=[]
    for (let i = 0; i < len; i++) {
        list.push({
            "name": faker.name.findName(),
            "time":faker.datatype.datetime,
            "device": {
              name:faker.name.jobArea(),
              position:faker.address.streetPrefix()
            },
            "title":faker.internet.email(),
            "source": {
              "type": sourceType[0],
              "parameter": {
                "rtsp": {
                  "url":faker.internet.url()
                },
                "onvif": {
                  "host": faker.internet.ip()
                },
                "sensepass": {
                  "device_sn": 'sssssasa'
                }
              }
            }
        })
    }
    return list
}


router.get('/tasklist',(req,res,next)=>{
    res.json({
        code:2000,
        msg:'ok',
        data:generateData(10)
    })
})


module.exports = router