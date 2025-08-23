import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// Make the app accept data from json
app.use(express.json({ limit: "16kb" }));

// Make the app accept data from URL
app.use(express.urlencoded({ extended, limit: "16kb" }));

// To store public things
app.use(express.static("public"));

// To make server apply crud operations on user cookies
app.use(cookieParser());
export { app };
