import db from "@/lib/prisma";

export async function FileIsExist(slug) {
  // console.log(slug);
  try {
    const BlogTable = await db.BlogTable.findFirst({
      where: { slug: slug },
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
export async function getAllFiles() {
  try {
    return await db.BlogTable.findMany();
  } catch (error) {
    console.log(error);
  }
}

export async function createFiles(slug, title) {
  console.log(slug);

  try {
    const BlogTable = await db.BlogTable.create({ data: { slug, title } });
    return { BlogTable };
  } catch (error) {
    return { error };
  }
}

// export async function deleteTag(id) {
//   try {
//     const Blogtag = await db.Blogtag.delete({
//       where: { id: id },
//     });
//     return { Blogtag };
//   } catch (error) {
//     return { error };
//   }
// }

// export async function editTag(id, title) {
//   try {
//     const Blogtag = await db.Blogtag.update({
//       where: { id: id },
//       data: { title },
//     });
//     return { Blogtag };
//   } catch (error) {
//     return { error };
//   }
// }

// const user = await prisma.user.update({
//   where: { email: "ruheni@prisma.io" },
//   data: { age: { increment: 1 } },
// });
