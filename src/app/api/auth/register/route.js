import {NextApiRequest, NextApiResponse} from "next";
import connect from "../../../utils/db";
import User from "../../../dbmodels/User";
import {NextResponse} from "next/server";
import bcrypt from "bcrypt";


export const POST = async (request) => {
    const {name, email, password} = await request.json();

    if (!name || !email || !password) {
        return new NextResponse("Fields missing", {status:400});
    }

    await connect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return new NextResponse("User exists", {status:409});
    }
    //const hashPassword = await bcrypt.hash(password, 11);
    const newUser = new User({
        name,
        email,
        password,
    });
    newUser.save();

    return new NextResponse("Name: "+name+" Email: "+email+" Password: "+password, {status:200});
};
