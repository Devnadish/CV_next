import dbConnect from "@/dbconfig/dbConfig";
import { Blog } from "@/models/blog/blog";
import { NextResponse } from "next/server";
// import { revalidatePath } from "next/cache";
await dbConnect();

// export const revalidate = true;
export async function GET(request) {
  try {
    const blogs = await Blog.find({}, { _id: 0, __v: 0, createdAt: 0, ip: 0 });
    console.log("show all blogs:",request.url);
    return NextResponse.json({ blogs });
  } catch (error) {
    console.log("Error from get All blogs : ", error);
  }
}

export async function POST(request) {
  const { blog, user, ip, counter } = await request.json();

  try {
    // await dbConnect();
    await Blog.create({
      blog: blog,
      ip: ip,
      user: user,
      counter: counter,
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log("Error from POST New blog With Ip : ", error);
  }
}
