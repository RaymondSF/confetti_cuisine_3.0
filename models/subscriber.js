import mongoose from 'mongoose'


const subscriberSchema = mongoose.Schema({

    name: {type:String, required: true},
    email: { type:String, required: true, unique: true, lowercase: true }
    zipCode:{
      type: Number,
      required: true,
      min: [10000, 'zipcode too short'],
      max: 99999,
    },
    streetAddress: { type:String, required:true},
    vip:Boolean,
  });

  export default mongoose.model("Subscriber", subscriberSchema);