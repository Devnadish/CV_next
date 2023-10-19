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

export async function createFiles(
  slug,
  title,
  language,
  description,
  crDate,
  subtitle
) {
  try {
    const BlogTable = await db.BlogTable.create({
      data: { slug, title, language, description, crDate, subtitle },
    });
    return { BlogTable };
  } catch (error) {
    return { error };
  }
}

export async function showTagfromDb(lang) {
  try {
    return await db.Blogtag.findMany({
      orderBy: { title: "desc" },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getDataAfterSearchFromDb(text, location, lang) {
  const tag = text.slice(0, 3);
  const tagText = text.slice(6);
  try {
    if (text.toLowerCase() === "all") {
      return await db.BlogTable.findMany({ where: { language: lang } });
    }
    if (text.toLowerCase() === "99999") {
      return await db.BlogTable.findMany({
        where: { language: lang },

        orderBy: {
          viewers: "asc",
        },
      });
    }
    if (tag === "tag") {
      return await db.BlogTable.findMany({
        where: { tag: tagText, language: lang },
      });
    }

    if (text.toLowerCase() === "-99999") {
      return await db.BlogTable.findMany({
        where: { language: lang },
        orderBy: {
          viewers: "desc",
        },
      });
    }

    return await db.BlogTable.findMany({
      where: {
        title: { contains: text, mode: "insensitive" },
        language: lang,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function getFreqBlog(lang) {
  console.log(lang);
  try {
    return await db.BlogTable.findMany({
      where: { viewers: { gt: 0 } },
      orderBy: { viewers: "desc" },
    });
  } catch (error) {
    console.log(error);
  }
}
