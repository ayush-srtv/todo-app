import React from "react";
import MUIListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function ListItem({ item, done, onDelete, onDone, ...props }) {
  const labelId = `checkbox-list-label-${item}`;
  return (
    <MUIListItem {...{ ...props, onClick: onDone }}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={done}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemIcon>
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
