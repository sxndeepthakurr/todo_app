const validateTodo=(req,res,next)=>{

    const {title,description}=req.body;

    if(!title || !description){
        res.status(400).json({message:"given title or description not found"});
    }

    next();

}

module.exports={
    validateTodo,
}