import compose from "lodash/fp/compose";

const _bind = (fn, cxt) => fn.bind(cxt);

const _delete = key => delete localStorage[key];

const { parse, stringify } = JSON;
const resolve = _bind(Promise.resolve, Promise);
const getItem = _bind(localStorage.getItem, localStorage);
const setItem = _bind(localStorage.setItem, localStorage);

const storage = {
  get: compose(
    resolve,
    parse,
    getItem
  ),
  set: compose(
    resolve,
    setItem,
    stringify
  ),
  delete: compose(
    resolve,
    _delete
  )
};

export default storage;
