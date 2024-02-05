import { NextResponse } from "next/server"
import connect from "../../../app/utils/db";
import Post from "../../dbmodels/Post";

export const GET = async (request) =>{
    try{
        await connect();
        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts), {status:200});
    }catch(err){
        return new NextResponse("Post GET did not work on database!", {status:500});
    }
};

export const POST = async (request) => {
    try {
      await connect();
  
      // Extract data from the request body
      const { title, description, content, username } = request.body;
  
      // Create a new Post instance
      const newPost = new Post({
        title,
        description,
        content,
        username,
      });
  
      // Save the new post
      await newPost.save();
  
      return new NextResponse("Post created successfully.", { status: 201 });
    } catch (err) {
      console.error(err);
      return new NextResponse("Post creation failed.", { status: 500 });
    }
  };

export const PUT = async (request) => {
    try {
      await connect();
  
      // Extract the post ID from the request parameters or body
      const postId = request.params.id || request.body.id;
  
      // Check if the post ID is provided
      if (!postId) {
        return new NextResponse("Post ID is required for update.", { status: 400 });
      }
  
      // Find the post by ID
      const existingPost = await Post.findById(postId);
  
      // Check if the post exists
      if (!existingPost) {
        return new NextResponse("Post not found.", { status: 404 });
      }
  
      // Update the post with the new data (modify as needed)
      existingPost.title = request.body.title || existingPost.title;
      existingPost.description = request.body.description || existingPost.description;
      existingPost.content = request.body.content || existingPost.content;
      existingPost.username = request.body.username || existingPost.username;
  
      // Save the updated post
      await existingPost.save();
  
      return new NextResponse("Post updated successfully.", { status: 200 });
    } catch (err) {
      console.error(err);
      return new NextResponse("Post update failed.", { status: 500 });
    }
  };