import type { DefaultNodeTypes } from "../types/nodeTypes";
import type { JSXConverters } from "./types";

import { BlockquoteJSXConverter } from "./converters/blockquote";
import { HeadingJSXConverter } from "./converters/heading";
import { HorizontalRuleJSXConverter } from "./converters/horizontalRule";
import { LinebreakJSXConverter } from "./converters/linebreak";
import { LinkJSXConverter } from "./converters/link";
import { ListJSXConverter } from "./converters/list";
import { ParagraphJSXConverter } from "./converters/paragraph";
import { TabJSXConverter } from "./converters/tab";
import { TableJSXConverter } from "./converters/table";
import { TextJSXConverter } from "./converters/text";
import { UploadJSXConverter } from "./converters/upload";

export const defaultJSXConverters: JSXConverters<DefaultNodeTypes> = {
  ...ParagraphJSXConverter,
  ...TextJSXConverter,
  ...LinebreakJSXConverter,
  ...BlockquoteJSXConverter,
  ...TableJSXConverter,
  ...HeadingJSXConverter,
  ...HorizontalRuleJSXConverter,
  ...ListJSXConverter,
  ...LinkJSXConverter({}),
  ...UploadJSXConverter,
  ...TabJSXConverter,
};
