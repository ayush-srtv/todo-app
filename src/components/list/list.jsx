import React from "react";
import MUIList from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function List({ children }) {
  const classes = useStyles();

  return <MUIList className={classes.root}>{children}</MUIList>;
}

export default List;
