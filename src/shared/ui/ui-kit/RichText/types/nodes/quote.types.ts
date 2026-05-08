import type { SerializedQuoteNode as _SerializedQuoteNode } from "@lexical/rich-text";
import type { Spread } from "lexical";

export type SerializedQuoteNode = Spread<
  {
    type: "quote";
  },
  _SerializedQuoteNode
>;
