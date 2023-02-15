const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    name:{type:String,required:true},
    img1:{type:String,required:true},
    img2:String,
    price:{type:Number,required:true},
    mrp:{type:String,required:true},
    discount:{type:String,required:true},
    category:{type:String,required:true},
    priority:String,
    rating:Number,
    rating_review:String,
    sold:String
})

const ProductModel=mongoose.model("products",productSchema);

module.exports={ProductModel};