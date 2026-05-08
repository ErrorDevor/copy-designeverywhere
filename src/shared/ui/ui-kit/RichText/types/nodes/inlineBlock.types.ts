import type { SerializedLexicalNode, Spread } from "lexical";

export type InlineBlockFields<T extends object = any> = {
  blockType: string;
  id: string;
} & T;

export type SerializedInlineBlockNode<T extends object = any> = Spread<
  {
    children?: never; // required so that our typed editor state doesn't automatically add children
    fields: InlineBlockFields<T>;
    type: "inlineBlock";
  },
  SerializedLexicalNode
>;
