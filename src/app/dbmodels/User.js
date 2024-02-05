import mongoose, {model, models} from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema(
    {
        name:{
            type: String,
            unique: false,
            required: true,
        },
        email:{
            type: String,
            unique: true,
            required: true,
        },
        password:{
            type: String,
            unique: false,
            required: true,
        },
    },
    {timestamps: true}
);

const User = models.User || model("User",userSchema)

export default User

