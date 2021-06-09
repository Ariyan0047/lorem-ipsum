import React, { useState } from "react";
import { data } from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([0]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="container text-center">
        <h1>generate lorem ipsum</h1>
      </div>
      <section className="container section text-center mt-2">
        <form className="form" onSubmit={handleSubmit}>
          <span className="para">paragraphs</span>
          <input
            name="num"
            type="number"
            value={count}
            onChange={(event) => setCount(event.target.value)}
          />
          <input type="button" value="generate" />
        </form>
      </section>
    </div>
  );
};

export default App;
