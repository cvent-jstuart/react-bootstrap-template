import React from "react";

// import AlertSample from "../../../components/Bootstrap/Alert/AlertSample";
import Alert from "../../../components/Bootstrap/Alert/Alert";

// require("./.less");

export default class AlertsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h1>Alerts</h1>
        </div>
        <h3>Type (Default="success")</h3>
        <div>
          <div>
            <span>
              &lt;Alert type=&quot;success&quot;&gt;
            </span>
            <Alert type="success">
              <strong>Success!</strong> This is a Success type Alert.
            </Alert>
          </div>
          <div>
            <span>
              &lt;Alert type=&quot;info&quot;&gt;
            </span>
            <Alert type="info">
              <strong>Info!</strong> This is an Info type Alert.
            </Alert>
          </div>
          <div>
            <span>
              &lt;Alert type=&quot;warning&quot;&gt;
            </span>
            <Alert type="warning">
              <strong>Warning!</strong> This is a Warning type Alert.
            </Alert>
          </div>
          <div>
            <span>
              &lt;Alert type=&quot;danger&quot;&gt;
            </span>
            <Alert type="danger">
              <strong>Danger!</strong> This is a Danger type Alert.
            </Alert>
          </div>
        </div>
        <hr></hr>
        <h3>Alignment (Default="left")</h3>
        <div>
          <div>
            <span>
              &lt;Alert type=&quot;success&quot; align=&quot;left&quot;&gt;
            </span>
            <Alert type="success" align="left">
              <strong>Success!</strong> This is a Success type Alert.
            </Alert>
          </div>
          <div>
            <span>
              &lt;Alert type=&quot;success&quot; align=&quot;center&quot;&gt;
            </span>
            <Alert type="success" align="center">
              <strong>Success!</strong> This is a Success type Alert.
            </Alert>
          </div>
          <div>
            <span>
              &lt;Alert type=&quot;success&quot; align=&quot;right&quot;&gt;
            </span>
            <Alert type="success" align="right">
              <strong>Success!</strong> This is a Success type Alert.
            </Alert>
          </div>
        </div>
        <h3>Text</h3>
        <div>
          <span>
            &lt;Alert type=&quot;info&quot; &gt;<strong>&lt;strong&gt;HTML&lt;/strong&gt; to appear inside the Alert goes here.</strong>&lt;/Alert&gt;
          </span>
          <Alert type="info">
            <strong>HTML</strong> to appear inside the Alert goes here.
          </Alert>
        </div>
        <h3>Icon</h3>
        <div>
          <span>
            &lt;Alert type=&quot;info&quot; icon=&quot;info-sign&quot;&gt;&lt;strong&gt;HTML&lt;/strong&gt; to appear inside the Alert goes here.&lt;/Alert&gt; <br />
            Full list available <a href="http://getbootstrap.com/components/#glyphicons-glyphs" target="_blank">here</a>.
          </span>
          <Alert type="info" icon="info-sign">
            <strong>HTML</strong> to appear inside the Alert goes here.
          </Alert>
        </div>
      </div>
    )
  }
}
