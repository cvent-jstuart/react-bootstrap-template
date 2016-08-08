import React from "react";

import Badge from "../../../components/Bootstrap/Badge/Badge";

// require("./.less");

export default class BadgesRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>Badges</h1>
        </div>
        <Badge />

      </div>
    )
  }
}
