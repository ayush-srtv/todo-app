import React from "react";
import MUIList from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function List({ children }) {
  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <MUIList className={classes.root}>
        {children.length === 0 ? <Typography>NO ITEMS</Typography> : children}
      </MUIList>
    </Paper>
  );
}

export default List;
