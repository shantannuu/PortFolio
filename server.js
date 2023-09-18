const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();
const dbConfig = require("./config/dbConfig");


const port = process.env.PORT || 5000;

const userRoute = require("./Routes/aboutRoutes")
const userAdminRoute = require("./routes/usersadminRoute")
const contactRoute =require("./Routes/contactRoutes")
const projectRoute =require("./Routes/projectRoutes")
const contactgetRoute=require("./Routes/adminRoute")

app.use("/api/users", userRoute);
app.use("/api/adminLogin",adminRoute);
app.use("/api/contact",contactRoute);
app.use("/api/project",projectRoute);
app.use("/api/admin",contactgetRoute);





const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "/client/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"))
    })
}


app.listen(port, () => console.log(`Server is running on ${port}`));

