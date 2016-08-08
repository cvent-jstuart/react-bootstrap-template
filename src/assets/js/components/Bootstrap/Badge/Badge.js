import React from "react";

// require("./.less");

export default class Thumbnails extends React.Component {
  render() {
    return (
      <div class="container theme-showcase" role="main">
        <p>
          <a href="#">Inbox <span class="badge">42</span></a>
        </p>
        <ul class="nav nav-pills" role="tablist">
          <li role="presentation" class="active"><a href="#">Home <span class="badge">42</span></a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages <span class="badge">3</span></a></li>
        </ul>
      </div>
    )
  }
}
