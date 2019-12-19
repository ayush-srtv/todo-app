import React from "react";
import Button from "@material-ui/core/Button";
import InputBox from "../../components/input-box";

function Header(props) {
  const { text, onChange, onAdd } = props;

  const handleKeyPress = event => event.key === "Enter" && onAdd(event);

  return (
    <header>
      <InputBox {...{ value: text, onChange, onKeyPress: handleKeyPress }} />
      <Button color="primary" onClick={onAdd}>
        Add
      </Button>
    </header>
  );
}

export default Header;
