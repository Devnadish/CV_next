import dbConnect, { dbClose } from "@/dbconfig/dbConfig";
import { Blog } from "@/models/blog/blog";
import { NextResponse } from "next/server";

export const revalidate = true;

export async function GET(request, context) {
  const { slug } = context.params;
  try {
    await dbConnect();
    const blogs = await Blog.find(
      { blog: slug },
      { _id: 0, __v: 0, createdAt: 0, ip: 0, updatedAt: 0, user: 0 }
    );

    return NextResponse.json({ blogs });
  } catch (error) {
    console.log("Error from get By slug : ", error);
  }
}

export async function PUT(request, context) {
  const slug = context.params.slug;
  // console.log("context : ", slug);

  try {
    await dbConnect();
    const blogData = await Blog.findOneAndUpdate(
      { blog: slug },
      {
        blog: slug,
        user: "khalid",
        ip: "10.10.40.40",
        $inc: { counter: 1 },
      },
      { new: true, upsert: true, includeResultMetadata: true }
    );
    // await dbClose();
    console.log("Update from get By slug : ");
    return NextResponse.json({ blogData });
  } catch (error) {
    console.log("Error from PUT When Update the counter : ", error);
  }
}
