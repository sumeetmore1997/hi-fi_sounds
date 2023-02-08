const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://sumeet:sumeet@cluster0.n0wmo.mongodb.net/prd?retryWrites=true&w=majority")

module.exports={
    connection
}

