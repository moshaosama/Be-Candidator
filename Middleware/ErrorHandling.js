import express from "express";

const app = express();

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});
