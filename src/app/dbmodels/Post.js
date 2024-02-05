import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,   
            required: true,
        },
        content:{
            // images may not be bigger than 16MB !!!
            type: Buffer,
            unique: false,
            required: true,
        },
        username:{
            type: String,
            unique: true,
            required: true,
        },
        points:{
            type: Number,
            required: true,
        },
        comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    },
    {timestamps: true}
);

export default mongoose.model("Post",postSchema);