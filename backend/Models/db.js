const mongoose = require("mongoose");
const url =
  "mongodb+srv://kinalkotheeya31:Ml4sUfsPelMGxF5I@cluster0.ppkvf.mongodb.net/auth-jwt?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
