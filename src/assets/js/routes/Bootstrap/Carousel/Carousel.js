import React from "react";

import Carousel from "../../../components/Bootstrap/Carousel/Carousel";

// require("./.less");

export default class CarouselsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>Carousels</h1>
        </div>
        <Carousel />

      </div>
    )
  }
}
