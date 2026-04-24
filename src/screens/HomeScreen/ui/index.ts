import { HomeScreens } from "../lib";

import { Hero } from "./01-Hero";
import { Trending } from "./02-Trending";
import { Library } from "./03-Library";

export const sections = [
  { id: HomeScreens.HERO, Section: Hero },
  { id: HomeScreens.TRENDING, Section: Trending },
  { id: HomeScreens.LIBRARY, Section: Library },
];

export { Hero, Trending, Library };
