const express = require('express');
const app = express();
const path = require("path");
const body_parser = require("body-parser");
const PORT = process.env.PORT || 35000;

// app.get('/', (req, res)=>{
//     res.json({ result: 'OK', datail: [1, 2, 3, 4, 5,] })
// })



//<=========== Middleware ==========>
app.use(body_parser.urlencoded({ extended: true })); //when you post service
app.use(body_parser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/assets/images", express.static(path.join(__dirname, '/assets/images')));

//Root Page (landing page 1)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/test.html"));
    // res.render("home.ejs", {user: req.user});
});

app.listen(PORT,()=>{
    console.log('Server is running '+PORT)
})