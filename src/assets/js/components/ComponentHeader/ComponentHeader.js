import React from "react";

// require("./.less");

export default class ComponentHeader extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: 15 }}>
        <h4 style={this.props.style} onClick={this.props.onClick}>
          {this.props.title}
        </h4>
        {(this.props.subtitle ? <div>{this.props.subtitle}</div> : null)}
      </div>
    )
  }
}
