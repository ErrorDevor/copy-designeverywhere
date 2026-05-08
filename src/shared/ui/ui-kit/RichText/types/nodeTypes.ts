import type { SerializedHeadingNode } from "./nodes/heading.types";
import type { SerializedHorizontalRuleNode } from "./nodes/hr.types";
import type { SerializedAutoLinkNode, SerializedLinkNode } from "./nodes/link.types";
import type { SerializedListItemNode, SerializedListNode } from "./nodes/list.types";
import type { SerializedQuoteNode } from "./nodes/quote.types";
import type { SerializedRelationshipNode } from "./nodes/relation.types";
import type { SerializedInlineBlockNode } from "./nodes/inlineBlock.types";
import type {
  SerializedTableCellNode,
  SerializedTableNode,
  SerializedTableRowNode,
} from "./nodes/table.types";
import type { SerializedUploadNode } from "./nodes/upload.types";
import type { SerializedBlockNode } from "./nodes/block.types";
import type {
  SerializedEditorState,
  SerializedElementNode,
  SerializedLexicalNode,
  Spread,
  SerializedLineBreakNode as _SerializedLineBreakNode,
  SerializedTabNode as _SerializedTabNode,
  SerializedTextNode as _SerializedTextNode,
} from "lexical";

export type {
  SerializedAutoLinkNode,
  SerializedLinkNode,
  SerializedListItemNode,
  SerializedListNode,
  SerializedRelationshipNode,
  SerializedUploadNode,
  SerializedQuoteNode,
  SerializedTableCellNode,
  SerializedTableNode,
  SerializedTableRowNode,
  SerializedHeadingNode,
  SerializedHorizontalRuleNode,
  SerializedBlockNode,
  SerializedInlineBlockNode,
};

/*
 *
 *
 *
 * MAIN
 *
 *
 *
 */

/*
 *
 *  * * *   * * *   * * *
 *  *         *     *
 *  * * *     *     *
 *  *         *     *
 *  * * *     *     * * *
 *
 */

export type SerializedParagraphNode<T extends SerializedLexicalNode = SerializedLexicalNode> =
  Spread<
    {
      textFormat: number;
      type: "paragraph";
    },
    SerializedElementNode<T>
  >;
export type SerializedTextNode = Spread<
  {
    children?: never; // required so that our typed editor state doesn't automatically add children
    type: "text";
  },
  _SerializedTextNode
>;

export type SerializedTabNode = Spread<
  {
    children?: never; // required so that our typed editor state doesn't automatically add children
    type: "tab";
  },
  _SerializedTabNode
>;

export type SerializedLineBreakNode = Spread<
  {
    children?: never; // required so that our typed editor state doesn't automatically add children
    type: "linebreak";
  },
  _SerializedLineBreakNode
>;

type RecursiveNodes<T extends SerializedLexicalNode, Depth extends number = 4> = Depth extends 0
  ? T
  : { children?: RecursiveNodes<T, DecrementDepth<Depth>>[] } & T;

type DecrementDepth<N extends number> = [0, 0, 1, 2, 3, 4][N];

export type TypedEditorState<T extends SerializedLexicalNode = SerializedLexicalNode> =
  SerializedEditorState<RecursiveNodes<T>>;

export type DefaultNodeTypes =
  | SerializedAutoLinkNode
  // | SerializedBlockNode // Not included by default
  | SerializedHeadingNode
  | SerializedHorizontalRuleNode
  | SerializedLineBreakNode
  | SerializedLinkNode
  | SerializedListItemNode
  | SerializedListNode
  | SerializedParagraphNode
  | SerializedQuoteNode
  | SerializedRelationshipNode
  | SerializedTabNode
  | SerializedTextNode
  | SerializedUploadNode;

export type DefaultTypedEditorState<T extends SerializedLexicalNode = SerializedLexicalNode> =
  TypedEditorState<DefaultNodeTypes | T>;
