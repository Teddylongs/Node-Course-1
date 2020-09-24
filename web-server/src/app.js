const path = require("path");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const express = require("express");
const app = express();
const hbs = require("hbs");

const PORT = 8000;

//Define paths and Express config
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Teddy Longs",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Teddy Longs",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Teddy Longs",
  });
});
app.get("/help/*", (req, res) => {
  res.render("404", {
    errorMessage: "Sorry, this help article was not found",
  });
});

app.get("/weather", (req, res) => {
  if (req.query.address) {
    geocode(req.query.address, (err, response) => {
      if (err) {
        console.log("Not valid");
        return response.send("Not a valid address");
      }
      forecast(response, (data) => {
        return res.send(data);
      });
    });
  } else {
    return res.send({ error: "Address not Provided" });
  }
});

app.get("/products", (req, res) => {
  if (!req.query) {
    return res.send({ error: "provide search term" });
  }
  res.send({ products: [] });
  console.log(req.query.address);
});
//404 page(s) setup
app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "This page does not exist",
  });
});

// Startup server
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
