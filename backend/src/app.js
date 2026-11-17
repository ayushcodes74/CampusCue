const express = require('express');
const app = express();
const cors = require("cors")
app.use(cors());
app.use(express.json());


app.get("/api/health", (req, res) => { 
    return res.json({
        "status": "ok"
    })
})


module.exports = app;