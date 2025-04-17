const express = require("express");
const connectDB = require("./config/db");
const ideaRoutes = require("./routes/ideaRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use("/api", ideaRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
