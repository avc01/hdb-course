// Imports
const express = require("express");
const { create } = require("express-handlebars");

const homeRouter = require("./routes/home");
const authRouter = require("./routes/auth");

// Server Init
const app = express();

// Hbs Config
const hbs = create({
  extname: ".hbs",
  partialsDir: ["views/components"],
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

// Middlewares
app.use(express.static(__dirname + "/public")); // Ruta publica
app.use("/", homeRouter);
app.use("/auth", authRouter);

// Server Start
app.listen(777, console.log(`Server started at port 777`));