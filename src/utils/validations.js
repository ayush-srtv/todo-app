export const validate = (list, text) => {
  if (!text) {
    return false;
  }
  if (!!list.find(li => li.item === text)) {
    return false;
  }
  return true;
};
