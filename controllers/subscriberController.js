"use strict";

import Subscriber from "../models/subscriber.js";

// get subscribers and render subscribers page

const .getAllSubscribers = (req, res) => {
  Subscriber.find({})
    .exec()
    // handle successful retrieval
    .then(subscribers => {
      res.render("subscribers", {
        subscribers: subscribers
      });
    })
    .catch(error => {
      console.log(error.message);
      return [];
    });
};


const getSubscriptionPage = (req, res) => {
  res.render("contact");
};

const saveSubscriber = (req, res) => {
    // new subscriber instance. give it's data from the request body
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode,
    streetAddress: req.body.streetAddress,
    vip: req.body.vip,
  });

  newSubscriber
    .save()
    .then(() => {
      res.render("thanks");
    })
    .catch((error) => {
      res.send(error);
    });
};

export const subscribersController = {
  getAllSubscribers,
  getSubscriptionPage,
  saveSubscriber,
};