export type UploadDataImproved = {
  fields: any;
  /**
   * Every lexical node that has sub-fields needs to have a unique ID. This is the ID of this upload node, not the ID of the linked upload document
   */
  id: string;
  relationTo: string;
  /**
   * Value can be just the document ID, or the full, populated document
   */
  value: number | string;
};
