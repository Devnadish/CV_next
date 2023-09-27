import db from "@/lib/prisma";

export async function getAllBlogs() {

    try {
        const blogs = await db.BlogTable.findMany();
        return blogs;
    } catch (error) {
        console.log(error);
    }

}