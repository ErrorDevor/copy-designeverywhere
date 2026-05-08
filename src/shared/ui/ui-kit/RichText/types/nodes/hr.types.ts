import type { SerializedLexicalNode, Spread } from "lexical";

export type SerializedHorizontalRuleNode = Spread<
  {
    children?: never; // required so that our typed editor state doesn't automatically add children
    type: "horizontalrule";
  },
  SerializedLexicalNode
>;
