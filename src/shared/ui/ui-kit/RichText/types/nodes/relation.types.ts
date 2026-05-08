import type { SerializedDecoratorBlockNode } from "@lexical/react/LexicalDecoratorBlockNode.js";
import type { Spread } from "lexical";

export type RelationshipData = {
  relationTo: string;
  value: number | string | any;
};

export type SerializedRelationshipNode = {
  children?: never; // required so that our typed editor state doesn't automatically add children
  type: "relationship";
} & Spread<RelationshipData, SerializedDecoratorBlockNode>;
