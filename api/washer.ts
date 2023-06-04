// const express = require("express");
import { Router } from 'express';
const Washer = require("../models/washerModel");

var router = Router();

router.get("/", (req: any, res: any) => {
    Washer.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      console.log(`${err} : GetAllWasher`);
    });
});

router.get("/:id", (req: any, res: any) => {
    Washer.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      console.log(`${err} : GetOneWasher`);
    });
});

router.post("/", (req: any, res: any) => {
  console.log('dusan', req.body);
  const client = new Washer({
    title: req.body.title,
    adress: req.body.adress,
    coordinate: req.body.coordinate,
    service: req.body.service,
    userRef: req.body.userRef,
    session: req.body.session,
  });
  client.save().then((result:any)=> {
    res.send(result);
  }).catch((err: any)=> {
    console.log(`${err} : PostWasher`)
  })
});

router.put("/:id", async (req: any, res: any) => {
  console.log('req', req.body);
  Washer.findById(req.params.id)
    .then(async (result:any) => {
      result.title = req.body.title;
      result.adress = req.body.adress;
      result.coordinate = req.body.coordinate;
      result.service = req.body.service;
      result.userRef = req.body.userRef;
      result.session = req.body.session;
      await result.save();
      res.send('success')
    })
    .catch((err: any) => {
      console.log(`${err} : EditOneWasher`);
    });
});

router.delete("/:id", (req: any, res: any) => {
    Washer.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("success");
    })
    .catch((err: any) => {
      console.log(`${err} : DeleteOneWasher`);
    });
});

module.exports = router;
