import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dorpdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is JS librabry",
  },
  {
    title: "What is Angular?",
    content: "React is JS Framework",
  },
  {
    title: "What is JS?",
    content: "JS is clinet side framework",
  },
];

const options = [
  {
    label: "The color of Red",
    value: "Red",
  },
  {
    label: "The color of Blue",
    value: "Blue",
  },
  {
    label: "The color of Black",
    value: "Black",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
