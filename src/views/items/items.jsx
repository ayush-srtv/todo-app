import React from "react";
import List from "../../components/list";
import ListItem from "../../components/list-item";

function Items({ list = [], setList }) {
  const handleDelete = item => e =>
    setList(list.filter(li => li.item !== item));

  return (
    <List>
      {list.map((list, index) => (
        <ListItem key={index} {...list} onDelete={handleDelete(list.item)} />
      ))}
    </List>
  );
}

export default Items;
