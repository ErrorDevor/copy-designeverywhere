import { HomeScreens } from "screens/HomeScreen";

import { Filter } from "features/Filter";

export const dynamic = "force-dynamic";

export default async function Home() {
   try {
      return (
         <>
            <HomeScreens.Hero />
            <HomeScreens.Trending />
            <Filter />
            <HomeScreens.Library />
         </>
      );
   } catch (error) {
      return null;
   }
}
