import type { SerializedDecoratorBlockNode } from "@lexical/react/LexicalDecoratorBlockNode.js";
import type { Spread } from "lexical";

type BaseBlockFields<T extends object = any> = {
  /** Block form data */
  blockName: string;
  blockType: string;
} & T;

export type BlockFields<T extends object = any> = {
  id: string;
} & BaseBlockFields<T>;

export type SerializedBlockNode<T extends object = any> = Spread<
  {
    children?: never; // required so that our typed editor state doesn't automatically add children
    fields: BlockFields<T>;
    type: "block";
  },
  SerializedDecoratorBlockNode
>;
