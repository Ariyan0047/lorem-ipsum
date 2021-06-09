import { data } from "./data";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(5);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) amount = 1;
    if (amount > 8) amount = 8;
    const modifiedData = data.slice(0, amount);
    setText(modifiedData);
    setCount(0);
  };

  return (
    <div className="App">
      <div className="container text-center">
        <h1>generate lorem ipsum</h1>
      </div>
      <section className="container section1 text-center">
        <form className="form" onSubmit={handleSubmit}>
          <span className="para">paragraphs</span>
          <input
            name="num"
            type="number"
            value={count}
            onChange={(event) => setCount(event.target.value)}
          />
          <input
            type="button"
            value="generate"
            className="btn btn-warning"
            onClick={handleSubmit}
          />
        </form>
      </section>
      <section className="container section2 text-center">
        {text.map((item) => {
          return <p key={uuid()}>{item}</p>;
        })}
        {!text.length <= 0 && (
          <button className="btn btn-danger w-100" onClick={() => setText([])}>
            reset
          </button>
        )}
      </section>
    </div>
  );
};

export default App;
