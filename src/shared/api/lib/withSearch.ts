import { SearchQuery } from "../types";
import qs from "qs";

export const mergeSearchQuery = (...queries: (SearchQuery | undefined)[]) => {
  const query: any = {};

  queries.forEach((q) => {
    if (q && typeof q === "string") {
      Object.assign(query, qs.parse(q));
    }
    if (q && typeof q === "object") {
      Object.assign(query, q);
    }
  });

  return query;
};

export const withSearch = (
  endpoint: string,
  search?: SearchQuery,
  locale: string | boolean = "en"
) => {
  const query: any = {};

  if (locale !== false) {
    query.locale = locale;
  }
  if (typeof search !== "undefined") {
    Object.assign(query, mergeSearchQuery(query, search));
  }

  const queryString = qs.stringify(query);

  return endpoint + (queryString !== "" ? `?${queryString}` : "");
};
