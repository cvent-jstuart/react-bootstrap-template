import React from "react";

import Listgroup from "../../../components/Bootstrap/Listgroup/Listgroup";

// require("./.less");

export default class ListgroupsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>List groups</h1>
        </div>
        <Listgroup />

      </div>
    )
  }
}
