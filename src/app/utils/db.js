import mongoose from "mongoose"
import {NextResponse} from "next/server";

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://<USER>:<PASSWORD>@cluster0.ar6tpie.mongodb.net/test?retryWrites=true&w=majority");
        return new NextResponse("success", {status: 200})
      } catch (error) {
        throw new Error("Connection to database failed!");
      }
};

export default connect;
