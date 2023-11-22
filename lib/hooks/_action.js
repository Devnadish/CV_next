'use server';

import { getBlogpathfromDB } from './dbAction';

export async function getBlogpath(searchPath) {
    return await getBlogpathfromDB(searchPath);
}
