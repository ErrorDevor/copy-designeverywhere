import { QueryClient, isServer } from "@tanstack/react-query";

let browserQueryClient: QueryClient | undefined = undefined;

function makeQueryClient() {
   return new QueryClient({
      defaultOptions: {
         queries: {
            staleTime: 60 * 60 * 4 * 1000, // 4hours
            refetchOnWindowFocus: false,
            placeholderData: (prevData: unknown) => prevData,
            queryFn: () => null,
         },
      },
   });
}

export function getQueryClient() {
   if (isServer) {
      return makeQueryClient();
   } else {
      if (!browserQueryClient) browserQueryClient = makeQueryClient();
      return browserQueryClient;
   }
}
