import React from "react";
import Password from "./passwordPractice";
class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  state = { term: "" };
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onAhsan(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Search items</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
