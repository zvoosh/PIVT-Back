// const express = require("express");
import { Router } from 'express';
const Washer = require("../models/washerModel");
var fs = require("fs");
var multer = require("multer");
var date_now = Date.now();
var storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, "../Front-end/auto-perionica/src/assets/");
  },
  filename: function (req: any, file: any, cb: any) {
    cb(null, date_now + file.originalname);
  },
});

//UPLOAD IAMGE

var fileFilter = (req: any, file: any, cb: any) => {
  //reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


var upload = multer({ storage: storage, fileFilter: fileFilter });

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
// UPLAOAD IMAGE
router.post("/",(req: any, res: any) => {
  console.log('dusan', req.body);
  const client = new Washer({
    title: req.body.title,
    adress: req.body.adress,
    coordinate: req.body.coordinate,
    service: req.body.service,
    userRef: req.body.userRef,
    session: req.body.session,
    contact: req.body.contact,
    imagePath: req.body.imagePath,
    review: req.body.review,
    workingHours: req.body.workingHours,
    workingDays: req.body.workingDays,
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
      result.service = req.body.service;//fix
      result.userRef = req.body.userRef;//fix
      result.session = req.body.session;//fix
      result.contact = req.body.contact;
      result.review = req.body.review;
      result.imagePath = req.body.imagePath,
      result.workingHours = req.body.workingHours,
      result.workingDays = req.body.workingDays,
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
