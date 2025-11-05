import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
    title: {
        type: String,
        required: true,
        unique: true,

    },
    description: {
        type: String,
        required: true,

    },
    maxStudents: {
        type: Number,
        default: 0,
        min [0, "Course cannot have less than zero members"],


    },
    cost: {
        type: Number,
        default: 0,
         min [0, "Course cannot have negative cost"],

    },
    { timestamps: true }
);
export default mongoose.model("Course", courseSchema)