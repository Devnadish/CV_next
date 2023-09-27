import db from "@/lib/prisma";

export async function getAllTags() {
  try {
    const blogs = await db.Blogtag.findMany();
    return blogs;
  } catch (error) {
    console.log(error);
  }
}

export async function createTag(title) {
  try {
    const Blogtag = await db.Blogtag.create({ data: { title } });
    return { Blogtag };
  } catch (error) {
    return { error };
  }
}

export async function deleteTag(id) {
  try {
    const Blogtag = await db.Blogtag.delete({
      where: { id: id },
    });
    return { Blogtag };
  } catch (error) {
    return { error };
  }
}

export async function editTag(id, title) {
  try {
    const Blogtag = await db.Blogtag.update({
      where: { id: id },
      data: { title },
    });
    return { Blogtag };
  } catch (error) {
    return { error };
  }
}

export async function getTagbyId(id) {
  try {
    const blogs = await db.Blogtag.findFirst({ where: { id: id } });
    console.log(blogs);
    return blogs;
  } catch (error) {
    console.log(error);
  }
}

// const user = await prisma.user.update({
//   where: { email: "ruheni@prisma.io" },
//   data: { age: { increment: 1 } },
// });
