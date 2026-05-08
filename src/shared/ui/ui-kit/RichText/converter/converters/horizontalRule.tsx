import type { SerializedHorizontalRuleNode } from "../../types/nodeTypes";
import type { JSXConverters } from "../types.js";
export const HorizontalRuleJSXConverter: JSXConverters<SerializedHorizontalRuleNode> = {
  horizontalrule: <hr />,
};
