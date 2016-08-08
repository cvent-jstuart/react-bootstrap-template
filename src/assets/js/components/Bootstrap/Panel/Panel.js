import React from "react";

// require("./.less");

export default class Panel extends React.Component {
  render() {
    return (
      <div class="container theme-showcase" role="main">
        <div class="row">
          <div class="col-sm-4">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
          </div>{/* /.col-sm-4 */}
          <div class="col-sm-4">
            <div class="panel panel-success">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
          </div>{/* /.col-sm-4 */}
          <div class="col-sm-4">
            <div class="panel panel-warning">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
            <div class="panel panel-danger">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
          </div>{/* /.col-sm-4 */}
        </div>
      </div>
    )
  }
}
