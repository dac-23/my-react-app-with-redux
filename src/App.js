import { useState } from "react";

function App() {
  return (
    <div>
      {/** EventDemo is the name of the function, attributes are parameter */}
      <EventDemo imageId="237" title="first" />
      <hr />
      <EventDemo imageId="238" title="second" />
      <hr />
      <EventDemo imageId="239" title="third" />
      <hr />
      <EventDemo imageId="240" title="third" />
    </div>
  );
}

function EventDemo({ imageId, title }) {
  let [counter, setCounter] = useState(100);
  let imageUrl = `https://picsum.photos/id/${imageId}/200/200`;

  let likeMe = () => {
    counter = counter + 1;

    // Trigger the DOM Operation :: Asking the REACT to perform DOM
    setCounter(counter);
  };

  // UI
  return (
    <div>
      <img
        src={imageUrl}
        alt=""
        style={{ width: "100%", objectFit: "cover" }}
      />
      <h1>Like {counter}</h1>
      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default App;
