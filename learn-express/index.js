const express = require("express")
    const mongoose = require("mongoose") 
    const routes = require("./routes")
    
    // Connect to MongoDB database
    mongoose
        .connect("mongodb://localhost:27017/shema_db", { useNewUrlParser: true })
        .then(() => {
            const app = express()
            app.use("/api",routes)
    
            app.listen(5000, () => {
                console.log("Server has started!")
            })
        })