import find from "lodash/find";

export const contains = (list = [], item) =>
  !!find(list, li => li.item === item);
