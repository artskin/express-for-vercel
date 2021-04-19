const router = require("express").Router();
const faker = require('faker');

const sourceType = ['UNKNOWN','VN_RTSP','VN_ONVIF','FC_SENSEPASS']

function generateData(len){
    let list=[]
    for (let i = 0; i < len; i++) {
        list.push({
            "task_id": faker.datatype.uuid(),
            "status": faker.datatype.boolean(),
            "timestamp":faker.datatype.datetime(),
            "title":faker.name.title(10),
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
        data:{
          list:generateData(10)
        }
    })
})


module.exports = router