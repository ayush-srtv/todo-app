import React from "react";

function ListItem({ item, onDelete, ...props }) {
  return (
    <li {...props}>
      {item}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default ListItem;
