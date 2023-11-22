import db from '@/lib/prisma';
import consoleLog from '@/lib/consoleLog';
export async function createIP(jsonResponse) {
    const check = await db.Iplog.findFirst({
        where: { ip: jsonResponse.ip },
    });
    if (check === null) {
        await addNewOne(jsonResponse);
        return { Acttion: 'New Record' };
    } else {
        await increaseOne(check.id);
        return { Acttion: 'Increase' };
    }
}

const addNewOne = async (jsonResponse) => {
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
        return await db.Iplog.findMany({ orderBy: { counter: 'desc' } });
    } catch (error) {
        consoleLog(error);
    }
};
