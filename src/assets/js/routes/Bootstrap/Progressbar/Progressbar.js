import React from "react";

import Progressbar from "../../../components/Bootstrap/Progressbar/Progressbar";

// require("./.less");

export default class ProgressbarsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>Progress bars</h1>
        </div>
        <Progressbar />

      </div>
    )
  }
}
