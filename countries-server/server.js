const express = require("express");
const fs = require("fs");
const app = express();
const port = 8000;

const countries = JSON.parse(fs.readFileSync("countries.json", "utf-8"));

app.get("/countries/all", (req, res) => {
  res.json(countries);
});

app.get("/countries/:code", (req, res) => {
  const code = req.params.code.toUpperCase();
  const country = countries.find((c) => c.cca2 === code || c.cca3 === code);
  if (country) {
    res.json(country);
  } else {
    res.status(404).send("Country not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
