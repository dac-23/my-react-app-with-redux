import { useState } from "react";

function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}

function EventDemo() {
  // Data Member
  let [counter] = useState(100);

  // Member Funcn
  let likeMe = () => {
    alert();
  };

  // default covention of the param name is :: e, p1
  let likeMe1 = (e) => {
    console.log(e);
    console.log(e.target);
  };

  // UI
  return (
    <div>
      <h1>Like {counter}</h1>
      <input type="button" value="Like Me" onClick={likeMe} />
      <input type="button" value="Like Me 1" onClick={likeMe1} />
    </div>
  );
}

export default App;
