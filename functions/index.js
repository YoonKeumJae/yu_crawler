const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.get("/api/data", (req, res) => {
  res.send("This is data from Firebase Functions using Express!");
});

exports.api = functions.https.onRequest(app);
