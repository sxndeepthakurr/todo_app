const Todo=require("../models/todo.model");

const createTodos=async (req,res)=>{
    try {
        await Todo.create(req.body);
        res.status(200).json({message:"ok"})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const getTodos=async (req,res)=>{
    try {
        const todo=await Todo.find();
        res.status(200).send(todo);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const updateTodos=async (req,res)=>{
    try {
        const {id}=req.params;
        const updateTodo=await Todo.findByIdAndUpdate(id,req.body);
        res.status(200).json({message:"todo updated",data:updateTodo});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const deleteTodo=async (req,res)=>{
    try {
        const {id}=req.params;
        const todo=await Todo.findByIdAndDelete(id);
        res.status(200).json({message:"deleted successfully"});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports={
    getTodos,
    createTodos,
    updateTodos,
    deleteTodo,
}