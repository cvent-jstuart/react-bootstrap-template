import React from "react";

require("./header.less");

export default class Body extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
