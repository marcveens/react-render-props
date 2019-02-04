import React from "react";
import ReactDOM from "react-dom";
import { Accordion } from "./Accordion";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Accordion
        header={(toggleCollapse, isOpen) => (
          <header className="m-accordion__header" onClick={toggleCollapse}>
            <div className="m-accordion__title">FAQ number 1</div>
            <div className="m-accordion__icon">{isOpen ? "-" : "+"}</div>
          </header>
        )}
        open={true}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        quos ut quo, non doloribus assumenda optio saepe, temporibus laborum
        fugit quibusdam animi pariatur dicta quidem. Quaerat doloribus
        consectetur tempore. Magnam.Velit expedita itaque sit dolore? Illum
        alias facere ut quod iure sunt dolores expedita laborum ab tempore ipsa,
        modi sequi laboriosam, vero nihil dignissimos! Dolores nobis earum enim
        quas ratione.
      </Accordion>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
