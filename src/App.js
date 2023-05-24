import { useState } from "react";

function App() {
  return (
    <div>
      <ListDemo />
    </div>
  );
}

function ListDemo() {
  // let list = ["237"]; // stateless
  let [list, setList] = useState(["237"]); // statefull
  let [imageInput, setImageInput] = useState("");

  let addNewImage = () => {
    // let newList = ["238", ...list];
    let newList = [imageInput, ...list];
    setList(newList);
  };

  let inputImageHandler = (e) => {
    setImageInput(e.target.value);
  };

  return (
    <div>
      <h1>List Demo</h1>

      <div className="my-2">
        <input
          type="text"
          placeholder="Enter Image Id"
          value={imageInput}
          onChange={inputImageHandler}
        />
        <input type="button" value="Add New Image" onClick={addNewImage} />
      </div>

      {list.map((item, index) => (
        <EventDemo key={index} imageId={item} title="first" />
      ))}
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
