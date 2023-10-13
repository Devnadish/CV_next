import db from "@/lib/prisma";

export async function createIP(jsonResponse) {
  console.log("first IP :", jsonResponse);
  const check = await db.Iplog.findFirst({
    where: { ip: jsonResponse.ip },
  });
  if (check === null) {
    addNewOne(jsonResponse);
  } else {
    console.log(check.id);
    increaseOne(jsonResponse, check.id);
  }
}

const addNewOne = async (jsonResponse) => {
  console.log("new");
  try {
    const Iplog = await db.Iplog.create({
      data: {
        ip: jsonResponse.ip,
        city: jsonResponse.city,
        region: jsonResponse.region,
        country: jsonResponse.country,
        loc: jsonResponse.loc,
        org: jsonResponse.org,
        timezone: jsonResponse.timezone,
      },
    });
  } catch (error) {
    return { error };
  }
};
const increaseOne = async (jsonResponse, id) => {
  try {
    const Iplog = await db.Iplog.update({
      where: { id: id },
      data: { counter: { increment: 1 } },
    });
  } catch (error) {
    return { error };
  }
};
export const displayIps = async () => {
  try {
    return await db.Iplog.findMany({ orderBy: { counter: "desc" } });
  } catch (error) {
    console.log(error);
  }
};
