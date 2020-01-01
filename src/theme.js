import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

export default createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: green,
    error: {
      main: red[400]
    }
  }
});
