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
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  subscribedAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subscriber",
  },
});
export default mongoose.model("User", userSchema);
