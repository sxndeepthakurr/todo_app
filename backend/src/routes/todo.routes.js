const express=require('express');

const router=express.Router();

const {getTodos,createTodos,updateTodos,deleteTodo}=require("../controllers/todo.controller");

router.get("/",getTodos);
router.post("/",createTodos);

router.put("/:id",updateTodos);

router.delete("/:id",deleteTodo)

module.exports=router;