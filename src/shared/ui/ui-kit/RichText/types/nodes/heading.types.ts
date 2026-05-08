import type { SerializedHeadingNode as _SerializedHeadingNode } from "@lexical/rich-text";
import type { Spread } from "lexical";

export type SerializedHeadingNode = Spread<
  {
    type: "heading";
  },
  _SerializedHeadingNode
>;
