const mongoose =require("mongoose");

const ingredientSchema = new mongoose.Schema({

});

const  Ingredient = mongoose.model("Ingredient", ingredientSchema);
module.exports = Ingredient;


