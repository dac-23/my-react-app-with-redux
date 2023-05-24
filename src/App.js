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

  // UI
  return (
    <div>
      <h1>Like {counter}</h1>
      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default App;
