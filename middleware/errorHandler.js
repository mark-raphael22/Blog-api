const errorhandler = (err,req,res,next) =>{
    res.status(500).json({msg:'error'})
}





module.exports =errorhandler 