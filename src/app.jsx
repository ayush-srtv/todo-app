import React, { useState, useEffect } from "react";
import Header from "./views/header";
import Items from "./views/items";
import { validate } from "./utils/validations";
import storage from "./utils/storage";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    async function get() {
      const lst = (await storage.get("list")) || [];
      console.log(lst);
      setList(lst);
    }
    get();
    return () => {};
  }, []);


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
      const newLst = [...list, { item: text, done: false }];
      setList(newLst);
      setText("");
      storage.set("list", newLst || []);
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
