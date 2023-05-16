const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())

app.getMaxListeners("/", (req, res)=>{
    res.download("christianCv.pdf")
});