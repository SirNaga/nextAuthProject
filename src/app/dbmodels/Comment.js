import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema(
    {
        text: {
        type: String,
        required: true,
        },
        username: {
        type: String,
        required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
