import React from "react";
import { Well } from "react-bootstrap";

// require("./.less");

export default class ComponentExample extends React.Component {
  render() {
    return (
      <Well>
      <div style={{ marginBottom: 15, fontWeight: "bold" }}>
        EXAMPLE
      </div>
        {this.props.children}
      </Well>
    )
  }
}
