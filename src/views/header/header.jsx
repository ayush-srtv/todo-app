import React from "react";
import InputBox from "../../components/input-box";

function Header(props) {
  const { text, onChange, onAdd } = props;
  console.log(props);
  return (
    <header>
      <InputBox {...{ value: text, onChange }} />
      <button onClick={onAdd}>Add</button>
    </header>
  );
}

export default Header;
