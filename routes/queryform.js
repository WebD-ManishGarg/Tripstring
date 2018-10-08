const express = require("express");
const mongoose = require("mongoose");
const QueryForm = require("./../models/queryform");
const router = express.Router();


router.post("/", (req, res, next) => {

    QueryForm.findOne({ email: req.body.email }, function (err, doc) {
      let feed = {
        "name": req.body.fullname,
        "email": req.body.email,
        "message": req.body.message,
        "phone": req.body.phone
      }
      if (err) {
        console.log(err);
        next();
      }
      console.log(doc);
      if (doc !== null) {
        doc.name = req.body.fullname;
        doc.email = req.body.email;
        doc.phone = req.body.phone;
        doc.save().then(obj => {
          console.log("saved object is: ----\n", obj, "\n-----------------------\n");
        });
        return res.redirect("./newharvest");
      }
      else { 
          feed.date = Date.now();
        QueryForm.create(feed).then(obj => {
          console.log("saved object---\n", obj, "\n----------\n")
          return res.redirect("./form_query");
        });
      }
  
    });
  
    console.log("----------=-=-=-=-=-=-==-=-------------------\n", req.body, "\n----------=-=-=-=-=-=-==-=-------------------\n\n");
  });
  
  router.get("/", (req, res, next) => {
    QueryForm.find({}).then((docs) => {
      console.log("---------------------", docs, "---------------------")
      res.render("query_form", { docs: docs })
      // res.json(docs)
    })
    // res.render("docs");
  });
  module.exports = router;