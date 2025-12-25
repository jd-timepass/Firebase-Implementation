import express from "express";
import cors from "cors";
import { authMiddleware } from "./middlewares/auth.middleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    uid: req.user.uid,
    email: req.user.email,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
