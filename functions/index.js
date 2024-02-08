/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { setGlobalOptions } = require("firebase-functions/v2");
const functions = require("firebase-functions");
const express = require("express");
const { yuhome } = require("./schools");
setGlobalOptions({ maxInstances: 10 });

const app = express();

app.get("/hello", (req, res) => {
  logger.info("Hello logs!", { structuredData: true });
  res.json({ message: "Hello from Firebase!" });
});

app.get("/yuhome", async (req, res) => {
  const data = await yuhome();
  res.json(data);
});

exports.api = functions.https.onRequest(app);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });
