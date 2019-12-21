export const validate = (list, text) => {
  if (!!list.find(li => li.item === text)) {
    return false;
  }
  return true;
};
