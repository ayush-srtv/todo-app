import React from "react";
import InputBox from "../../components/input-box";

function Header(props) {
  const { text, onChange, onAdd } = props;

  const handleKeyPress = event => event.key === "Enter" && onAdd(event);
  const placeholder = "what needs to be done?";

  return (
    <header>
      <h1>todos</h1>
      <InputBox
        {...{ value: text, onChange, onKeyPress: handleKeyPress, placeholder }}
      />
    </header>
  );
}

export default Header;
