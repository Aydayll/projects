const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require('./routes/authRoutes')

const app = express();

const dbURL =
  "mongodb+srv://atabek:1234@cluster0.frgar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json())
app.use(cookieParser())

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));

const block = [
  { img: "/images/premium/Offline.svg", name: "Offline mode.", description: "Save and listen anywhere." },
  { img: "/images/premium/HQ.svg", name: "High quality audio.", description: "Enjoy the full range of sound." },
  { img: "/images/premium/NoADS.svg", name: "No ads.", description: "Enjoy nonstop music." },
  { img: "/images/premium/UnlimSkips.svg", name: "Unlimited skips.", description: "Just tap skip." },
];

app.get("/", (req, res) => {
  res.render("pages/index", { block });
});
app.get("/home", (req, res) => {
  res.render("pages/home", { block });
});

// app.get('/set-cookies', (req, res)=>{
//   // res.setHeader('Set-cookie', 'newUser= true')
//   res.cookies('newUser', true , {maxAge : 5000 * 5000 , secure: true})
//   // res.cookie('aydaaaay')
//   res.send('You got the cookies')
// })

// app.get("/logIn", (req, res) => {
//   res.render("pages/logIn");
// });

// app.get("/signUp", (req, res) => {
//   res.render("pages/signUp");
// });
app.use(authRouter)