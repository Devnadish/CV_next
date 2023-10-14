import db from "@/lib/prisma";

export async function FileIsExist(slug) {
  try {
    const BlogTable = await db.BlogTable.findFirst({
      where: { slug: slug },
    });

    return BlogTable;
  } catch (error) {
    console.log(error);
  } finally {
    async () => {
      await db.$disconnect();
    };
  }
}
export async function getAllFiles(lang) {
  try {
    return await db.BlogTable.findMany({
      where: { language: lang },
      orderBy: { viewers: "desc" },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createFiles(slug, title, language) {
  try {
    const BlogTable = await db.BlogTable.create({
      data: { slug, title, language },
    });
    return { BlogTable };
  } catch (error) {
    return { error };
  }
}
