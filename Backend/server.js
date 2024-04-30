import connectDB from "./db/connectDB.js"
import dotenv from "dotenv"
import express from "express"
import cookieParser from "cookie-parser"  
import userRoutes from "./routes/userRoutes.js"


dotenv.config();

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
 

//Routes
app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/messages", messageRoutes);
  

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
