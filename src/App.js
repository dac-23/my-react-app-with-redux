import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={AppErrorHandler}>
      <div>
        <SimpleDemo />
      </div>
    </ErrorBoundary>
  );
}

function SimpleDemo() {
  let user = { id: 1, name: "rohit" };

  return (
    <div>
      <h1>Hello World</h1>
      <h1>{user}</h1>
    </div>
  );
}

function AppErrorHandler() {
  return (
    <div>
      <h1>Handle the Error</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid
        accusantium quis cupiditate impedit magni ab natus, facere dignissimos
        nisi animi officia exercitationem quo earum doloremque a sunt
        praesentium eos.
      </p>
    </div>
  );
}

export default App;
