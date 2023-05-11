const express = require("express");
require("./db/config");
const cors = require("cors");
const UserDetails = require("./db/UserDetails");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/list", async (req, res) => {
  const UserData = await UserDetails.find();
  // console.log(UserData);
  res.send(UserData);
});
app.post("/adduser-detail", async (req, res) => {
  const UserData = new UserDetails(req.body);
  const result = await UserData.save();
  console.log(UserData);
  console.log(result);
  res.send(result);
});
app.listen(5000);
