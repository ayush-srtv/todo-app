import React from "react";
import MUIListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function ListItem({ item, onDelete, ...props }) {
  return (
    <MUIListItem {...props}>
      <ListItemText primary={item} />
      <ListItemSecondaryAction>
        <IconButton onClick={onDelete} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </MUIListItem>
  );
}

export default ListItem;
