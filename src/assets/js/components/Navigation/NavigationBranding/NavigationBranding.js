import React from "react";

// require("./navigation-branding.less");

export default class NavigationBranding extends React.Component {
  render() {
    return (
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="./index.html#/Home">{this.props.title}</a>
      </div>
    )
  }
}
