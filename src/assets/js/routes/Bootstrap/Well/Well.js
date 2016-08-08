import React from "react";

import Well from "../../../components/Bootstrap/Well/Well";

// require("./.less");

export default class WellsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>Wells</h1>
        </div>
        <Well />

      </div>
    )
  }
}
