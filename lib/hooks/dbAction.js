import db from "@/lib/prisma";

export async function getBlogpathfromDB(searchPath) {
  try {
    const BlogTable = await db.BlogTable.findMany({
      where: {
        targetlinks: {
          hasEvery: [searchPath],
        },
      },
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

// export async function getBlogpathfromDB(searchPath) {
//   console.log(searchPath);
//   try {
//     const BlogTable = await db.BlogLink.findFirst({
//       where: { title: searchPath },
//     });
//     console.log(BlogTable);
//     return BlogTable;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     async () => {
//       await db.$disconnect();
//     };
//   }
// }
