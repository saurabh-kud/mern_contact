const express = require("express");
const connectDB = require("./config/db");
const errorHandeler = require("./middleware/errorMiddleware");
const app = express();

connectDB();

//to get data from req body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//home route
app.get("/", (req, res) => {
  res.send("welcome to user api to use api go : /v1/api/user");
});

//user api route
app.use("/v1/api/user", require("./Routes/UserRoute/userRoute"));

app.use(errorHandeler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
