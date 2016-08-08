import React from "react";

import Label from "../../../components/Bootstrap/Label/Label";

// require("./.less");

export default class LabelsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>Labels</h1>
        </div>
        <Label />

      </div>
    )
  }
}
