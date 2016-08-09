import React from "react";
import { Collapse } from "react-bootstrap";

import ComponentHeader from "../ComponentHeader/ComponentHeader";

export default class PropTable extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ComponentHeader
          onClick={ ()=> this.setState({ open: !this.state.open })}
          style={{ cursor: "pointer" }}
          title={this.props.title}
          subtitle={this.props.subtitle}
        />
        <Collapse in={this.state.open}>
          {this.props.children}
        </Collapse>
      </div>
    );
  }
}
