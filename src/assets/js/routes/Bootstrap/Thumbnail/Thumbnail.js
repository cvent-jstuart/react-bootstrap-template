import React from "react";

import Thumbnail from "../../../components/Bootstrap/Thumbnail/Thumbnail";

// require("./.less");

export default class ThumbnailsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>Thumbnails</h1>
        </div>
        <Thumbnail />

      </div>
    )
  }
}
