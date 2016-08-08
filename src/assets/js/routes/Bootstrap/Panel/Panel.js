import React from "react";

import Panel from "../../../components/Bootstrap/Panel/Panel";

// require("./.less");

export default class PanelsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>Panels</h1>
        </div>
        <Panel />

      </div>
    )
  }
}
