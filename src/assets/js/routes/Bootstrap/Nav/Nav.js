import React from "react";

import Nav from "../../../components/Bootstrap/Nav/Nav";

// require("./.less");

export default class NavsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>Navs</h1>
        </div>
        <Nav />
        
      </div>
    )
  }
}
