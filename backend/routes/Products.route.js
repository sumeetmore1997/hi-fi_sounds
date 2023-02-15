const express=require("express")
const { ProductModel }=require("../models/Products.model")
const productRoute=express.Router()


productRoute.get("/",(req,res) => {
    res.send("All the Products here")
})

productRoute.post("/create",async(req,res) => {
    const payload=req.body
    try{
        const new_product=new ProductModel(payload)
        await new_product.save()
        res.send("Product is added")
    }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
    }
})

module.exports={
    productRoute
}