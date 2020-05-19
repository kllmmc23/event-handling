import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState("");

  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleOnMouseOut() {
    setMouseOver(false);
  }
  const [name, setName] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "White" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleOnMouseOut}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
