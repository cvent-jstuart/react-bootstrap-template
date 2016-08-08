import React from "react";

// require("./.less");

export default class Nav extends React.Component {
  render() {
    return (
      <div class="container theme-showcase" role="main">
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages</a></li>
        </ul>
        <ul class="nav nav-pills" role="tablist">
          <li role="presentation" class="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages</a></li>
        </ul>
      </div>
    )
  }
}
