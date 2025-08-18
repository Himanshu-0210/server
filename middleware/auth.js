const jwt=require('jsonwebtoken')
const UserModel=require('../model/User')


const checkAuth=async (req,res,next)=>{
    const token=req.cookies.token
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    try{
        const decoded=jwt.verify(token,'kuchbhi@91')
        const user=await UserModel.findById(decoded.ID)
        if(!user){
            return res.status(401).json({message:"user not found"})
        }
        req.user=user
        console.log(req.user)
        next()
    }
    catch(error){
        console.log(error)
        res.status(401).json({message:"invalid token"})
    }
}


module.exports=checkAuth