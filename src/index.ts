import express from "express";
import cors from "cors";
import authRoutes from "@routes/auth";
import homeRoutes from "@routes/home";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoutes);
app.use("/home", homeRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running at port 5000");
});
