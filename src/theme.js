import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

export default createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: blue,
    error: {
      main: red[400]
    }
  }
});
