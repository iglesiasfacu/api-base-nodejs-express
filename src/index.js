// imports
const express = require("express");
const workoutRouter = require("./routes/workoutRoutes");

// declarations
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("<h2>Welcome to API</h2>");
});

app.use("/api/workout", workoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening in: http://localhost:${PORT}/api`);
});
