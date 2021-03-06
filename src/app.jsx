import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./views/header";
import Items from "./views/items";
import { validate } from "./utils/validations";
import storage from "./utils/storage";
import theme from "./theme";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    async function _get() {
      const lst = (await storage.get("list")) || [];
      setList(lst);
    }
    _get();
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
      async function _update(newLst) {
        await storage.set("list", newLst || []);
        setList(newLst);
        setText("");
      }
      _update(newLst);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header {...headerProps} />
        <Items {...itemProps} />
      </div>
    </ThemeProvider>
  );
}

export default App;
