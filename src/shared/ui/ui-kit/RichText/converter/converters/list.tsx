import type {
  SerializedListItemNode,
  SerializedListNode,
} from "../../types/nodeTypes";
import type { JSXConverters } from "../types.js";
import { nanoid } from "nanoid";

export const ListJSXConverter: JSXConverters<
  SerializedListItemNode | SerializedListNode
> = {
  list: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({
      nodes: node.children,
    });

    const NodeTag = node.tag;

    return <NodeTag className={`list-${node?.listType}`}>{children}</NodeTag>;
  },
  listitem: ({ node, nodesToJSX, parent }) => {
    const hasSubLists = node.children.some(
      (child: any) => child.type === "list"
    );

    const children = nodesToJSX({
      nodes: node.children,
    });

    if ("listType" in parent && parent?.listType === "check") {
      const uuid = nanoid();

      return (
        <li
          aria-checked={node.checked ? "true" : "false"}
          className={`list-item-checkbox${node.checked ? " list-item-checkbox-checked" : " list-item-checkbox-unchecked"}${hasSubLists ? " nestedListItem" : ""}`}
          role="checkbox"
          style={{ listStyleType: "none" }}
          tabIndex={-1}
          value={node?.value}
        >
          {hasSubLists ? (
            children
          ) : (
            <>
              <input
                checked={node.checked}
                id={uuid}
                readOnly={true}
                type="checkbox"
              />
              <label htmlFor={uuid}>{children}</label>
              <br />
            </>
          )}
        </li>
      );
    } else {
      return (
        <li
          className={`${hasSubLists ? "nestedListItem" : ""}`}
          style={hasSubLists ? { listStyleType: "none" } : undefined}
          value={node?.value}
        >
          {children}
        </li>
      );
    }
  },
};
