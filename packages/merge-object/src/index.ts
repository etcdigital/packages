export const mergeObject = (item: any, itemToMerge: any | any[]): any => {
  if (Array.isArray(itemToMerge)) {
    return itemToMerge.reduce((acc, obj) => Object.assign(acc, obj), {
      ...item,
    });
  }
  return Object.assign({}, item, itemToMerge);
};
