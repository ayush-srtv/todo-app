import React, { useState } from "react";
import Header from "./views/header";
import Items from "./views/items";

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <Header />
      <Items list={[{ item: "something" }]} />
    </div>
  );
}

export default App;
