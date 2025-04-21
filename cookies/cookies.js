//this is not actually connected to the rest of the project
const express = require("express");
const app = express();
const port = 8080;
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode")); // "secretcode if required if using signed cookies"

app.get("/getsignedcookie", (req, res) => {
    //signed cookie
    res.cookie("made-in", "india", { signed: true });
    res.send("signed cookie send");
});

//verifying signed cookie
app.get("/verify", (req, res) => {
    console.log(req.cookies); //prints unsigned cookies
    console.log(req.signedCookies); //prints signed cookies
    res.send("verified");
});

app.get("/", (req, res) => {
    //unsigned cookie
    console.dir(req.cookies);
    res.send("you reached root");
});

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "hello_user");
    res.send("send you some cookies");
});

app.listen(port, () => {
    console.log(`listining to port ${port}`);
});
