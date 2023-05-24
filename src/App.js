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
  // e very userful when working input element
  let likeMe1 = (e) => {
    console.log(e);
    console.log(e.target);
  };

  // User defined param
  let likeMe2 = (p1) => {
    console.log(p1);
  };

  // UI
  return (
    <div>
      <h1>Like {counter}</h1>
      <input type="button" value="Like Me" onClick={likeMe} />
      <input type="button" value="Like Me 1" onClick={likeMe1} />

      {/** For User Defined param */}
      <input type="button" value="Like Me 2" onClick={() => likeMe2("data")} />
    </div>
  );
}

export default App;
