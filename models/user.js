import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    first: {
      type: String,
      trim: true,
    },
    last: {
      type: String,
      trim: true,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  zipCode: {
    type: Number,
    min: [10000, "Zip code too short"],
    max: 99999,
  },
  password: {
    type: String,
    required: true,
  },
  courses: [{ type: mongoose.schema.types.objectId, ref: "Course" }],
  subscribedAccount: {
    type: mongoose.schema.Types.ObjectsId,
    ref: "Subscriber",
  },
});
