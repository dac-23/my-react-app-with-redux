import { useState } from "react";

function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}

function EventDemo() {
  let [counter, setCounter] = useState(100);

  let likeMe = () => {
    counter = counter + 1;

    // Trigger the DOM Operation :: Asking the REACT to perform DOM
    setCounter(counter);
  };

  // UI
  return (
    <div>
      <img src="https://picsum.photos/id/237/300" alt="" />
      <h1>Like {counter}</h1>
      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default App;
