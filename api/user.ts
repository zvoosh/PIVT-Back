// const express = require("express");
import { Router } from 'express';
const User = require("../models/userModel");

var router = Router();

router.get("/", (req: any, res: any) => {
  User.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      console.log(`${err} : GetAllClient`);
    });
});

router.get("/:id", (req: any, res: any) => {
    User.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      console.log(`${err} : GetOneClient`);
    });
});

router.post("", (req: any, res: any) => {
  const client = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    role: req.body.role,
    adresa: req.body.adresa,
    contact: req.body.contact,
    email: req.body.email,
    carType: req.body.carType
  });
  client.save().then((result:any)=> {
    res.send(result);
  }).catch((err: any)=> {
    console.log(`${err} : PostClient`)
  })
});

router.put("/:id", async (req: any, res: any) => {
  console.log('dusan');
  // res.send('dusan');
  User.findById(req.params.id)
    .then(async (result:any) => {
      result.username = req.body.username;
      result.password = req.body.password;
      result.name = req.body.name;
      result.role = req.body.role;
      result.adresa = req.body.adresa;
      result.email = req.body.email;
      result.contact = req.body.contact;
      result.carType = req.body.carType;
      await result.save();
      res.send('success')
    })
    .catch((err: any) => {
      console.log(`${err} : EditOneClient`);
    });
});

router.delete("/:id", (req: any, res: any) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("success");
    })
    .catch((err: any) => {
      console.log(`${err} : DeleteOneClient`);
    });
});

module.exports = router;
