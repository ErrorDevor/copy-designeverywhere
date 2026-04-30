import { authApi } from "../api/authApi";
import { getServerAccessToken } from "../lib/getServerAccessToken";

import { AuthClientProvider } from "./AuthClientProvider";

interface Props {
   children: React.ReactNode;
}

export async function AuthProvider(props: Props) {
   const { children } = props;

   const accessToken = await getServerAccessToken();

   const data = await authApi
      .getMe({
         config: {
            headers: accessToken
               ? {
                    Authorization: `Bearer ${accessToken}`,
                 }
               : {},
         },
      })
      .then((d) => d.user || null)
      .catch(() => null);

   return <AuthClientProvider data={data}>{children}</AuthClientProvider>;
}
