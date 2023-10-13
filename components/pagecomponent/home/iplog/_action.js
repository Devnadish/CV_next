"use server";

import { createIP, displayIps } from "./dbaction";
import { revalidatePath } from "next/cache";

export async function getIp() {
  const request = await fetch("https://ipinfo.io/json?token=87600d57a3b1fe");
  const jsonResponse = await request.json();
  await createIP(jsonResponse);
  revalidatePath("/");
  return { data: jsonResponse };
}

export async function getAllIp() {
  const data = await displayIps();
  // revalidatePath("/");
  return data;
}
