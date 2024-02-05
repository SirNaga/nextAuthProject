import {NextApiRequest, NextApiResponse} from "next";
import connect from "../../../utils/db";
import User from "../../../dbmodels/User";
import {NextRequest, NextResponse} from "next/server";


export const POST = async (request) => {
    const {email, password} = await request.json();

    await connect();

    const existingUser = await User.findOne({ email });
    if (existingUser.password == password) {
        return new NextResponse("Name: "+existingUser.name+" Email: "+existingUser.email+" Password: "+existingUser.password, {status:200});
    }

    return new NextResponse("No such user", {status:400});
};
