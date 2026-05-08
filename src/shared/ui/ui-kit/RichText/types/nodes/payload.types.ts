export type JsonValue = JsonArray | JsonObject | unknown;
export type JsonArray = Array<JsonValue>;
export interface JsonObject {
  [key: string]: any;
}
