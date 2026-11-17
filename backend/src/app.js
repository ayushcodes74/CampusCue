const express = require('express');
const app = express();
const cors = require("cors")
const eventRoutes = require("./routes/eventRoutes");
app.use(cors());
app.use(express.json());

app.use("/api/v1/events", eventRoutes);
app.get("/api/health", (req, res) => { 
    return res.json({
        "status": "ok"
    })
})

app.use((req, res) => {
    return res.status(404).json({
        status: "error",
        message: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err);

    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

module.exports = app;