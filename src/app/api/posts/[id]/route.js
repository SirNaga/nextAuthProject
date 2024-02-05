import { NextResponse } from "next/server"
import connect from "../../../utils/db";
import Post from "../../../dbmodels/Post";

export const GET = async (request, {params}) =>{

    const id = {params}

    try{
        await connect();
        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), {status:200});
    }catch(err){
        return new NextResponse("Post GET by ID did not work on database!", {status:500});
    }
};