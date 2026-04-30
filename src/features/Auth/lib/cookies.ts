import Cookies from "js-cookie";


export function setAccessToken(accessToken: string) {
  Cookies.set("accessToken", accessToken, {
    expires: 60 * 60 * 24 * 7,
  });
}

export function removeAccessToken() {
  Cookies.remove("accessToken");
}

export function getAccessToken(): string | null {
  return Cookies.get("accessToken") || null;
}