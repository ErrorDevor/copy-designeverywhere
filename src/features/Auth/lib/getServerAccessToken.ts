import { cookies } from "next/headers";

export const getServerAccessToken = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;

  return accessToken;
};
