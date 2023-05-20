import express from "express";
import cors from "cors";
import moogoose from "mongoose";
import {userRouter} from './routes/users.js'
import {recipesRouter} from './routes/recipes.js'


const app = express();
app.use(express.json());  //will convert the request from react app to json
app.use(cors());
app.use("/auth",userRouter);
app.use("/recipes",recipesRouter);

moogoose.connect("mongodb+srv://NaughtyRecipe:oN56hbr1XhEaoS4s@recipe.c01qbqv.mongodb.net/recipe?retryWrites=true&w=majority");

app.listen(3001,()=> console.log("SERVER STARTED!"));