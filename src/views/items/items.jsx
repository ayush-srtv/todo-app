import React from "react";
import storage from "../../utils/storage";
import List from "../../components/list";
import ListItem from "../../components/list-item";

function Items({ list = [], setList }) {
  const handleDelete = item => e =>
    setList(list.filter(li => li.item !== item));

  const handleDone = item => e => {
    const index = list.findIndex(li => li.item === item);
    list[index] = {
      ...list[index],
      done: !list[index].done
    };
    async function _update(lst) {
      await storage.set("list", lst);
      setList(lst);
    }
    _update([...list]);
  };

  return (
    <List>
      {list.map((li, index) => (
        <ListItem
          key={index}
          {...li}
          onDelete={handleDelete(li.item)}
          onDone={handleDone(li.item)}
        />
      ))}
    </List>
  );
}

export default Items;
