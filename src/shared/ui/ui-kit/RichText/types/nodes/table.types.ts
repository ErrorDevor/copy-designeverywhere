import type {
  SerializedTableCellNode as _SerializedTableCellNode,
  SerializedTableNode as _SerializedTableNode,
  SerializedTableRowNode as _SerializedTableRowNode,
} from "@lexical/table";
import type { Spread } from "lexical";

export type SerializedTableCellNode = Spread<
  {
    type: "tablecell";
  },
  _SerializedTableCellNode
>;

export type SerializedTableNode = Spread<
  {
    type: "table";
  },
  _SerializedTableNode
>;

export type SerializedTableRowNode = Spread<
  {
    type: "tablerow";
  },
  _SerializedTableRowNode
>;
