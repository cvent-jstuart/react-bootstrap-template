import React from "react";

// require("./.less");

export default class Jumbotron extends React.Component {
  render() {
    return (
      <div class="container theme-showcase" role="main">
        <div class="jumbotron">
          <h1>Theme example</h1>
          <p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</p>
        </div>
      </div>
    )
  }
}
