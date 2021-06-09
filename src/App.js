import { data } from "./data";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(data);
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
          <input type="button" value="generate" className="btn btn-warning" />
        </form>
      </section>
      <section className="container section2 text-center">
        {text.map((item) => {
          return <p key={uuid()}>{item}</p>;
        })}
      </section>
    </div>
  );
};

export default App;
