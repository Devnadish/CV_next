import db from "@/lib/prisma";

export async function createIP(jsonResponse) {
  console.log("first IP :", jsonResponse);
  const check = await db.Iplog.findFirst({
    where: { ip: jsonResponse.ip },
  });
  if (check === null) {
    addNewOne(jsonResponse);
    return { Acttion: "New Record" };
  } else {
    console.log(check.id);
    increaseOne(check.id);
    return { Acttion: "Increase" };
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
const increaseOne = async (id) => {
  try {
    console.log(id);
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
