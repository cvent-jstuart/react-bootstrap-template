import React from "react";

import Table from "../../../components/Bootstrap/Table/Table";

// require("./.less");

export default class TablesRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>Tables</h1>
        </div>
        <Table />

      </div>
    )
  }
}
