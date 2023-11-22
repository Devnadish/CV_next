'use server';

import { displayIps } from './dbaction';
import { revalidatePath } from 'next/cache';

export async function getIp() {
    const request = await fetch('https://ipinfo.io/json?token=87600d57a3b1fe');
    const jsonResponse = await request.json();

    revalidatePath('/dashboard/iplog');
    return { data: jsonResponse };
}

export async function getAllIp() {
    const data = await displayIps();
    return data;
}
