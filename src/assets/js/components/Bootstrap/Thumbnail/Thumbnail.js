import React from "react";

// require("./.less");

export default class Thumbnails extends React.Component {
  render() {
    return (
      <div class="container theme-showcase" role="main">
        <img data-src="holder.js/200x200" class="img-thumbnail" alt="200x200" style={{"width": 200 + "px", "height": 200 + "px"}} src="http://chan.catiewayne.com/c/src/138578149239.png" data-holder-rendered="true" />
      </div>
    )
  }
}
