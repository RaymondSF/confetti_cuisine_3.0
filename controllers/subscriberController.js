import Subscriber from "../models/subscriber.js";

// get subscribers and render subscribers page
const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}).exec();
    res.render("subscribers", { subscribers });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error fetching subscribers");
  }
};

const getSubscriptionPage = (req, res) => {
  res.render("contact");
};

const saveSubscriber = async (req, res) => {
  try {
    const newSubscriber = new Subscriber({
      name: req.body.name,
      email: req.body.email,
      zipCode: req.body.zipCode,
      streetAddress: req.body.streetAddress,
      vip: req.body.vip,
    });

    await newSubscriber.save();
    res.render("thanks");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error saving subscriber");
  }
};

export const subscribersController = {
  getAllSubscribers,
  getSubscriptionPage,
  saveSubscriber,
};
