import React from "react";

// require("./.less");

export default class Dropdown extends React.Component {
  render() {
    return (
      <div class="container theme-showcase" role="main">
        <div class="dropdown theme-dropdown clearfix">
          <a id="dropdownMenu1" href="#" class="sr-only dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li class="active"><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
