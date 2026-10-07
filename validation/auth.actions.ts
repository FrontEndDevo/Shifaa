"use server";

import { cookies } from "next/headers";

export async function verifyAndSetPasskey(enteredPasskey: string) {
  const secretPasskey = process.env.VITE_ADMIN_PASSKEY;

  if (!secretPasskey) {
    throw new Error("Admin passkey is not defined on the server environment.");
  }

  if (enteredPasskey === secretPasskey) {
    const cookieStore = await cookies();

    const adminKeyword = process.env.ADMIN_KEYWORD;

    cookieStore.set("admin_access_token", adminKeyword ?? "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return { success: true };
  }

  return { success: false };
}

export async function checkAdminSession() {
  const adminKeyword = process.env.ADMIN_KEYWORD;

  if (!adminKeyword) {
    console.error(
      "Security Warning: ADMIN_SECRET_KEY is not defined in the environment.",
    );
    return false;
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("admin_access_token")?.value;

  if (!token) {
    return false;
  }

  return token === adminKeyword;
}
