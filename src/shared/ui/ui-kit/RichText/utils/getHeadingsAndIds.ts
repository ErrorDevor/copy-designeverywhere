import { SerializedEditorState } from "lexical";
import slugify from "slugify";

type HeadingType = {
  text: string;
  tag: string;
  id: string;
};

export function slugifyHeading(text: string) {
  return slugify(text, {
    lower: true,
    trim: true,
  });
}

export function getHeadingsAndIds(data: SerializedEditorState) {
  const headings: HeadingType[] = [];

  let currentIndex = 1;

  for (const item of data.root.children) {
    if (item.type === "heading") {
      const itemData = item as any;
      let text = "";

      for (const child of itemData.children) {
        if (child.text) {
          text += child.text;
        }
      }

      let id = slugifyHeading(text);

      if(headings.findIndex(i => i.id === id) !== -1) {
        id += '-' + currentIndex;
        currentIndex++;
      }

      headings.push({
        text,
        id,
        tag: itemData.tag,
      });
    }
  }

  return headings;
}
