const express=require("express")
const productRoute=express.Router()

const { EarbudsModel, RockerzModel }=require("../models/Products.model")

// --------earbuds---------

productRoute.get("/earbuds",(req,res) => {
    res.send("All the Products here")
})

productRoute.post("/earbuds/add",async(req,res) => {
    const payload=req.body
    try{
        const new_product=new EarbudsModel(payload)
        await new_product.save()
        res.send("Product is added")
    }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
    }
})

// ---------rockerz--------

productRoute.get("/rockerz",(req,res) => {
    res.send("All the Products here")
})

productRoute.post("/rockerz/add",async(req,res) => {
    const payload=req.body
    try{
        const new_product=new RockerzModel(payload)
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