const express = require("express")

const path = require("path")
const app = express()
require("dotenv").config()


const helmet = require("helmet")


console.log(process.env.REACT);
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.hsts({ maxAge: 90 * 24 * 60 * 60, force: true }));
app.use(helmet.dnsPrefetchControl());
app.use(
  helmet.contentSecurityPolicy({
    directives: {

      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "https://res.cloudinary.com"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"],
    },
  })
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.REACT);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});



app.use(express.json())


app.use("/api", require("./routes/indexRoutes"))




app.use(express.static(path.join(__dirname, "views/dist")));
app.get("*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/dist", "index.html"));
});






app.listen(4444, () => {
  console.log("server up at port 4444");
})