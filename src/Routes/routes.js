const express = require("express");

const Schema = require("../Schema/DataSchema");

const routers = express.Router();

routers.post("/signin", async (req, res) => {
  let { email, password } = req.body;
  const new_user = new Schema({ email, password });
  try {
    const user = await Schema.findOne({ email });
    if (user){
      res.json({message:"user already exist"})
    }else{
      
      let added = await new_user.save();
      res.json(added);
    }

  } catch (err) {
    console.log(err, "err");
  }
});

routers.post("/login", async (req, res) => {
  let { email, password } = req.body;

  try {
    const user = await Schema.findOne({ email });

    if (user) {
      const valid_password = await Schema.findOne({ password });
      if (valid_password) {
        res.json({ user, message: "allow to login" });
      } else {
        res.json("inValid password");
      }
    } else {
     res.json({message:"User not Found"})
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = routers;
