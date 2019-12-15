import React, { useState } from "react";
import Header from "./views/header";
import Items from "./views/items";

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
      setList(list.concat([{ item: text }]));
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
