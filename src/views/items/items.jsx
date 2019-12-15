import React from "react";
import List from "../../components/list";
import ListItem from "../../components/list-item";

function Items({ list = [] }) {
  return (
    <List>
      {list.map(list => (
        <ListItem {...list} />
      ))}
    </List>
  );
}

export default Items;
