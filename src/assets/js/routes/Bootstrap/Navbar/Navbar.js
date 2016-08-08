import React from "react";

import Navbar from "../../../components/Bootstrap/Navbar/Navbar";

// require("./.less");

export default class NavbarsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>Navbars</h1>
        </div>
        <Navbar />

      </div>
    )
  }
}
