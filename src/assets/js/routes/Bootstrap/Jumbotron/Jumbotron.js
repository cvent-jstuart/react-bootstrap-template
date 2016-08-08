import React from "react";

import Jumbotron from "../../../components/Bootstrap/Jumbotron/Jumbotron";

// require("./.less");

export default class JumbotronRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>Jumbotron</h1>
        </div>
        <Jumbotron />

      </div>
    )
  }
}
