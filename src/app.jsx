import React, { useState } from "react";
import Header from "./views/header";
import Items from "./views/items";
import { validate } from "./utils/validations";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const itemProps = {
    list,
    setList
  };

  const headerProps = {
    text,
    onChange: event => setText(event.target.value),
    onAdd: () => {
      if (!validate(list, text)) {
        return;
      }
      setList([...list, { item: text, done: false }]);
      setText("");
    }
  };

  return (
    <div className="App">
      <Header {...headerProps} />
      <Items {...itemProps} />
    </div>
  );
}

export default App;
