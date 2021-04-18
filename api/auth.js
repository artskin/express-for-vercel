const router = require("express").Router();
const userList = [
    {
        id: 0,
        username: 'admin',
        password: 'any',
        name: 'Super Admin',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        introduction: 'I am a super administrator',
        email: 'admin@test.com',
        phone: '1234567890',
        roles: ['admin']
    },
    {
        id: 1,
        username: 'editor',
        password: 'any',
        name: 'Normal Editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        introduction: 'I am an editor',
        email: 'editor@test.com',
        phone: '1234567890',
        roles: ['editor']
    }
];

router.get('/userlist',(req,res,next)=>{
    res.json({
        code:2000,
        data:userList,
        msg:'ok'
      })
})


module.exports = router