import React from "react";

import type { SerializedTextNode } from "../../types/nodeTypes";
import { inlineToJSXCSS } from "../../utils/inlineToJSXCSS";
import { NodeFormat } from "../../utils/nodeFormat";
import type { JSXConverters } from "../types.js";

export const TextJSXConverter: JSXConverters<SerializedTextNode> = {
  text: ({ node }) => {
    let text: React.ReactNode = node.text;
    const style = node.style ? inlineToJSXCSS(node.style) : {};

    if (node.format & NodeFormat.IS_BOLD) {
      text = <strong style={style}>{text}</strong>;
    }
    if (node.format & NodeFormat.IS_ITALIC) {
      text = <em style={style}>{text}</em>;
    }
    if (node.format & NodeFormat.IS_STRIKETHROUGH) {
      text = <del style={style}>{text}</del>;
    }
    if (node.format & NodeFormat.IS_UNDERLINE) {
      text = <u style={style}>{text}</u>;
    }
    if (node.format & NodeFormat.IS_CODE) {
      text = <code style={style}>{text}</code>;
    }
    if (node.format & NodeFormat.IS_SUBSCRIPT) {
      text = <sub style={style}>{text}</sub>;
    }
    if (node.format & NodeFormat.IS_SUPERSCRIPT) {
      text = <sup style={style}>{text}</sup>;
    }
    if (typeof text === "string" && node.style) {
      text = <span style={style}>{text}</span>;
    }

    return text;
  },
};
