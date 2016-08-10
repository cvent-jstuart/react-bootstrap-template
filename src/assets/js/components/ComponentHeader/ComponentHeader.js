import React from "react";

// require("./.less");

export default class ComponentHeader extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: 15 }}>
        <h3 style={this.props.style} onClick={this.props.onClick}>
          {this.props.title}
        </h3>
        {( this.props.subtitle ?
          Array.isArray(this.props.subtitle) ?
            this.props.subtitle.map( (st, i) => {
              return <div key={i} style={{ marginBottom: 15 }}>{st}</div>
            })
          : <div style={{ marginBottom: 15 }}>{this.props.subtitle}</div>
        : null )}
      </div>
    )
  }
}
