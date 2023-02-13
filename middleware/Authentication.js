//get access and verify token-(then allow you to go to the journal route)


const jwt = require('jsonwebtoken');


const auth= async (req,res,next)=>{
    const authHeaders= req.headers.authorization
    if (!authHeaders || !authHeaders.startwith('Bearer ')){
        return res.status(401).json({msg:"Auth failed"})
    }
    const token = authHeaders.split(' ')[1]

    try {
       const payload =jwt.verify(token,process.env.JWT_SECRET) 
       //req.user = await Users.findbyId(payload.)
       req.user={userId:payload.userId, name:payload.name}
       next();
    } catch (error) {
        return res.status(401).json({msg:"Auth failed"})
    }
}

module.exports =auth;