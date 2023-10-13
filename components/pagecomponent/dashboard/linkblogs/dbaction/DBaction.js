import db from "@/lib/prisma";

export async function getAllFiles(lang) {
  console.log(lang);
  try {
    return await db.BlogTable.findMany({
      where: { language: lang },
      orderBy: { viewers: "desc" },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function AddBlogLinkToDB(id, targetlink) {
  try {
    const BlogTable = await db.BlogTable.update({
      where: { id: id },
      data: { targetlinks: { push: targetlink } },
    });

    // console.log(BlogTable);
    return BlogTable;
  } catch (error) {
    console.log(error);
  } finally {
    async () => {
      await db.$disconnect();
    };
  }
}
