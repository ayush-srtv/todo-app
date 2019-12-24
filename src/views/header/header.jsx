import React from "react";
import Typography from "@material-ui/core/Typography";
import InputBox from "../../components/input-box";

function Header(props) {
  const { text, onChange, onAdd } = props;

  const handleKeyPress = event => event.key === "Enter" && onAdd(event);
  const placeholder = "what needs to be done?";

  return (
    <header>
      <Typography variant="h4" component="h4">
        todos
      </Typography>
      <InputBox
        {...{ value: text, onChange, onKeyPress: handleKeyPress, placeholder }}
      />
    </header>
  );
}

export default Header;
