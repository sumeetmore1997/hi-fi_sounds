const express=require("express")
const productRoute=express.Router()

const { EarbudsModel, RockerzModel }=require("../models/Products.model")

// --------earbuds---------

const productsModel={earbuds:EarbudsModel,rockerz:RockerzModel}

productRoute.get("/:category",async(req,res) => {
    console.log(req.params)
    const earbuds=await productsModel[req.params.category].find(req.body)
    res.send({"msg":`All the ${req.params.category} Products here`,data:earbuds})
})

productRoute.post("/:category/add",async(req,res) => {
    const payload=req.body
    try{
        let new_product
        // for (let i=0; i<payload.length; i++)
        // {
            //console.log(productsModel[req.params.category])
            new_product=new productsModel[req.params.category](payload)
        await new_product.save()
        // }
        //res.send("Product is added")
        res.send({"msg":`Product is added in ${req.params.category}`,data:new_product})
    }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong",err:err.message})
    }
})

// ---------rockerz--------

// productRoute.get("/rockerz",(req,res) => {
//     res.send("All the Products here")
// })

// productRoute.post("/rockerz/add",async(req,res) => {
//     const payload=req.body
//     try{
//         const new_product=new RockerzModel(payload)
//         await new_product.save()
//         res.send("Product is added")
//     }catch(err){
//         console.log(err)
//         res.send({"msg":"Something went wrong"})
//     }
// })


module.exports={
    productRoute
}