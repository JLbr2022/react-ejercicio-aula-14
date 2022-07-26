import React from "react";
import "./Challenge.css";

class Challenge extends React.Component {
  render() {
    return (
      <div className="challenge centered">
        <div className="DisplayContent">
          <h4 className="centered">
            {this.props.content} {this.props.userName}
          </h4>
        </div>
      </div>
    );
  }
}

export default Challenge;
