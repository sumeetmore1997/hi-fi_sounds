const mongoose=require("mongoose");

const earbudsSchema=mongoose.Schema({
    name:{type:String,required:true},
    img1:{type:String,required:true},
    img2:{type:String},
    price:{type:Number,required:true},
    mrp:{type:Number,required:true},
    discount:{type:Number,required:true},
    priority:{type:String},
    rating:{type:Number},
    rating_review:{type:Number},
    sold_percent:{type:Number},
    qty:{type:Number},
    available:{type:Number}
})

const EarbudsModel=mongoose.model("earbuds",earbudsSchema);

const rockerzSchema=mongoose.Schema({
    name:{type:String,required:true},
    img1:{type:String,required:true},
    img2:{type:String},
    price:{type:Number,required:true},
    mrp:{type:Number,required:true},
    discount:{type:Number,required:true},
    priority:{type:String},
    rating:{type:Number},
    rating_review:{type:Number},
    sold_percent:{type:Number},
    qty:{type:Number},
    available:{type:Number}
})

const RockerzModel=mongoose.model("rockerz",rockerzSchema);


module.exports={EarbudsModel, RockerzModel};