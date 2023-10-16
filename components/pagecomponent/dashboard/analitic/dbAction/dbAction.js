import db from "@/lib/prisma";

export async function increaseViewers(id) {
  try {
    await db.BlogTable.update({
      where: {
        id: id,
      },
      data: {
        viewers: { increment: 1 },
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function puplitITonDb(id, checked) {
  console.log(id, checked);
  try {
    await db.BlogTable.update({
      where: {
        id: id,
      },
      data: {
        published: checked,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateDbTitle(id, title, description) {
  try {
    await db.BlogTable.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        description: description,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}
export async function decreaseViewers(id) {
  try {
    await db.BlogTable.update({
      where: {
        id: id,
      },
      data: {
        viewers: { decrement: 1 },
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteBlog(id) {
  try {
    await db.BlogTable.delete({ where: { id: id } });
  } catch (error) {
    console.log(error.message);
  }
}

export async function getDataAfterSearchFromDb(text, location) {
  try {
    if (text.toLowerCase() === "all") {
      return await db.BlogTable.findMany();
    }
    if (text.toLowerCase() === "99999") {
      return await db.BlogTable.findMany({
        orderBy: {
          viewers: "asc",
        },
      });
    }

    if (text.toLowerCase() === "-99999") {
      return await db.BlogTable.findMany({
        orderBy: {
          viewers: "desc",
        },
      });
    }

    return await db.BlogTable.findMany({
      where: {
        title: { contains: text, mode: "insensitive" },
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

// import db from "@/lib/prisma";

// export async function getDataAfterSearchFromDb(text, location, lang) {
//   try {
//     if (text.toLowerCase() === "all") {
//       return await db.BlogTable.findMany({ where: { language: lang } });
//     }
//     if (text.toLowerCase() === "99999") {
//       return await db.BlogTable.findMany({
//         orderBy: {
//           viewers: "asc",
//         },
//       });
//     }

//     if (text.toLowerCase() === "-99999") {
//       return await db.BlogTable.findMany({
//         orderBy: {
//           viewers: "desc",
//         },
//       });
//     }

//     return await db.BlogTable.findMany({
//       where: {
//         title: { contains: text, mode: "insensitive" },
//         language: lang,
//       },
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// export async function increaseViewers(id) {
//   try {
//     await db.BlogTable.update({
//       where: {
//         id: id,
//       },
//       data: {
//         viewers: { increment: 1 },
//       },
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// export async function puplitITonDb(id, checked) {
//   console.log(id, checked);
//   try {
//     await db.BlogTable.update({
//       where: {
//         id: id,
//       },
//       data: {
//         published: checked,
//       },
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// export async function updateDbTitle(id, title, description) {
//   try {
//     await db.BlogTable.update({
//       where: {
//         id: id,
//       },
//       data: {
//         title: title,
//         description: description,
//       },
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// export async function decreaseViewers(id) {
//   try {
//     await db.BlogTable.update({
//       where: {
//         id: id,
//       },
//       data: {
//         viewers: { decrement: 1 },
//       },
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// export async function deleteBlog(id) {
//   try {
//     await db.BlogTable.delete({ where: { id: id } });
//   } catch (error) {
//     console.log(error.message);
//   }
// }
