

export const getNodeText = (node: any) => {
  let text = "";

  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      text += getNodeText(child);
    }
  } else if (node.text) {
    text += node.text;
  }

  return text;
};