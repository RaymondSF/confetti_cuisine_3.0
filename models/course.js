import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
    title: {
        type: string,
        required: true,
        unique: true,

    },
    description: {
        type: string,
        required: true,

    },
    maxStudents: {
        type: number,
        default: 0,
        min [0, "Course cannot have less than zero members"],


    },
    const: {
        type: number,
        default: 0,
         min [0, "Course cannot have negative cost"],

    },
    timestamps: true
);
export default mongoose.model("course", courseSchema)