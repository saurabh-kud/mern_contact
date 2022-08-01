const express = require("express");
const connectDB = require("./config/db");
const errorHandeler = require("./middleware/errorMiddleware");
const path = require("path");
const app = express();

connectDB();

//to get data from req body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

//home route
app.get("/", (req, res) => {
  res.send("welcome to user api to use api go : /v1/api/user");
});

//user api route
app.use("/v1/api/user", require("./Routes/UserRoute/userRoute"));
app.use("/v1/api", require("./Routes/UserAuth/userAuth"));

app.use(errorHandeler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
