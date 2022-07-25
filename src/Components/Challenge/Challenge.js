import React from "react";

class Challenge extends React.Component {
  render() {
    return (
      <div>
        <h4>
          {this.props.content} {this.props.userName}
        </h4>
      </div>
    );
  }
}

export default Challenge;

// function Challenge(props) {..
//   return (
//     <div>
//       <h1>
//         {props.content} {props.userName}
//       </h1>
//     </div>
//   );
// }
