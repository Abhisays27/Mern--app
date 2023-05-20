import { RecipeModel } from "../models/Recipes.js";
import express from "express";
import mongoose from "mongoose";
import { UserModel } from "../models/Users.js";

const router = express.Router();

//Allow to find any recipe in the database
router.get("/",async (req,res) => {
    try{
        const response = await RecipeModel.find({});
        res.json(response);
       }
    catch(err){
        res.json(err);

    }
})

//Allow to post recipe
router.post("/",async (req,res) => {
    const recipe = new RecipeModel(req.body);
    try{
        const response = await recipe.save({});
        res.json(response);
       }
    catch(err){
        res.json(err);

    }
});

//saving a recipe

router.put("/",async (req,res) => {
   

    
    try{
        const recipe = await RecipeModel.findById(req.body.recipeId)  //finding  the recipe
        const user = await UserModel.findById(req.body.userId)        //findng the user that is saving a specific 
        user.savedRecipes.push(recipe);
        await user.save();
        res.json({savedRecipes: user.savedRecipes});
       }
    catch(err){
        res.json(err);

    }
});

router.get("/savedRecipes",async (req,res)=> {
    try{
        const user = await UserModel.findById(req.body.userID)
        const savedRecipes =await RecipeModel.find({
            _id: {$in: user.savedRecipes},
        })
        res.json({savedRecipes});

    }
    catch{
        res.json(err);

    }
    
});

router.get

export {router as recipesRouter}

