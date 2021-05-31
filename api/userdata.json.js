const userList = [
    {
        id: 0,
        username: 'admin',
        password: 'any',
        name: 'Super Admin',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        introduction: 'I am a administrator',
        email: 'admin@163.com',
        phone: '18522133212',
        roles: ['admin'],
        modules:['usermanage'],
        permissionCodes:['2007021','2007022','2009527',]
    },
    {
        id: 1,
        username: 'editor',
        password: 'any',
        name: 'Normal Editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        introduction: 'I am an editor',
        email: 'editor@163.com',
        phone: '18532245678',
        roles: ['editor'],
        modules:[],
        permissionCodes:['2007021','2007022']
    }
];

module.exports = userList