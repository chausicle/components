import React from "react";
import ReactDOM from "react-dom";

import Comment from "./components/Comment";

const App = () => {
  return (
    <div className="ui container comments">
      <Comment />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
