import React from "react";

class Password extends React.Component {
  state = { first: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Enter ppassword</label>
            <input
              type="password"
              value={this.state.first}
              onChange={(e) => {
                this.setState({ first: e.target.value });
              }}
            />
          </div>
          {this.state.first.length < 4 ? "Must be greater then 4" : null}
        </form>
      </div>
    );
  }
}
export default Password;
