const jwt = require('jwt')
const requireAuth = (req, res, next)=>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token, 'секретный пароль созданный в AuthCntroller')
    }
    else{
        res.redirect('/login')
    }
}
requireAuth()