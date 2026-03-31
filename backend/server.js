const app=require("./src/app");

const PORT=8080;

const connectDB=require("./src/config/db");
connectDB();
app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})