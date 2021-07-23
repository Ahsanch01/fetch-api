import React from "react";
import reactDom from "react-dom";
import App from "./components/App";
import Exercise from "./exercise";
class Index extends React.Component {
  render() {
    return (
      <div>
        <App />
        <Exercise />
      </div>
    );
  }
}
reactDom.render(<Index />, document.querySelector("#root"));
