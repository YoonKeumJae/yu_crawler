const { setGlobalOptions } = require("firebase-functions/v2");
const functions = require("firebase-functions");
const express = require("express");
const { yuhome } = require("./schools");
setGlobalOptions({ maxInstances: 10 });

const app = express();

app.get("/yuhome", async (req, res) => {
  const data = await yuhome();
  res.json(data);
});
// app.get("/career", async (req, res) => {
//   const data = await yuhome();
//   res.json(data);
// });
// app.get("/foreign", async (req, res) => {
//   const data = await yuhome();
//   res.json(data);
// });
// app.get("/health", async (req, res) => {
//   const data = await yuhome();
//   res.json(data);
// });
// app.get("/counseling", async (req, res) => {
//   const data = await yuhome();
//   res.json(data);
// });

exports.api = functions.https.onRequest(app);
