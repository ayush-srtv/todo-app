import React from "react";
import MUIList from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ListAlt from "@material-ui/icons/ListAlt";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function List({ children, paperClassName = "" }) {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={paperClassName}>
      <MUIList className={classes.root}>
        {children.length === 0 ? (
          <>
            <ListAlt />
            <Typography>No Items</Typography>
          </>
        ) : (
          children
        )}
      </MUIList>
    </Paper>
  );
}

export default List;
