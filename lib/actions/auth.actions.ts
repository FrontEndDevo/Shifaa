"use server";

import { cookies } from "next/headers";

export async function verifyAndSetPasskey(enteredPasskey: string) {
  const secretPasskey = process.env.ADMIN_PASSKEY;

  if (!secretPasskey) {
    throw new Error("ADMIN_PASSKEY is not defined on the server environment.");
  }

  if (enteredPasskey === secretPasskey) {
    const cookieStore = await cookies();

    cookieStore.set("admin_access_token", "authenticated_admin_session", {
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
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_access_token")?.value;

  return !!token;
}
