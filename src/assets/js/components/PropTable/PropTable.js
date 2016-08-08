import React from "react";
import { Collapse } from "react-bootstrap";

export default class PropTable extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3 onClick={ ()=> this.setState({ open: !this.state.open })} style={{cursor: "pointer"}}>
          {this.props.title}
        </h3>
        <Collapse in={this.state.open}>
          {this.props.children}
        </Collapse>
      </div>
    );
  }
}
