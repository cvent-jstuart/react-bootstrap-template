import React from "react";

import { Button, ButtonToolbar, Table } from "react-bootstrap";

// require("./.less");

export default class ButtonsRoute extends React.Component {
  render() {
    return (
      <div className="body">
        <div class="page-header">
          <h1>Buttons</h1>
        </div>
        <div>
          <h3>
            bsStyle
          </h3>
          <ButtonToolbar>
            <Button>Default</Button>
            <Button bsStyle="primary">Primary</Button>
            <Button bsStyle="success">Success</Button>
            <Button bsStyle="info">Info</Button>
            <Button bsStyle="warning">Warning</Button>
            <Button bsStyle="danger">Danger</Button>
            <Button bsStyle="link">Link</Button>
          </ButtonToolbar>
        </div>
        <hr></hr>
        <div>
          <h3>
            bsSize
          </h3>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large">Large button</Button>
            <Button bsSize="large">Large button</Button>
          </ButtonToolbar>
          <ButtonToolbar style={{marginTop: 10 + "px"}}>
            <Button bsStyle="primary">Default button</Button>
            <Button>Default button</Button>
          </ButtonToolbar>
          <ButtonToolbar style={{marginTop: 10 + "px"}}>
            <Button bsStyle="primary" bsSize="small">Small button</Button>
            <Button bsSize="small">Small button</Button>
          </ButtonToolbar>
          <ButtonToolbar style={{marginTop: 10 + "px"}}>
            <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
            <Button bsSize="xsmall">Extra small button</Button>
          </ButtonToolbar>
        </div>
        <hr></hr>
        <h3>
          Block
        </h3>
        <div>
          <div className="well" style={{maxWidth: 400, margin: '0 auto 10px'}}>
            <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
            <Button bsSize="large" block>Block level button</Button>
          </div>
        </div>
        <hr></hr>
        <div>
          <h3>
            Active
          </h3>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large">Primary button</Button>
            <Button bsStyle="primary" bsSize="large" active>Active Primary button</Button>
          </ButtonToolbar>
          <ButtonToolbar style={{marginTop: 10 + "px"}}>
            <Button bsSize="large">Button</Button>
            <Button bsSize="large" active>Active Button</Button>
          </ButtonToolbar>
        </div>
        <hr></hr>
        <div>
          <h3>
            Href (returns &lt;a&gt; instead of &lt;button&gt;)
          </h3>
          <ButtonToolbar>
            <Button href="#">Link</Button>
            <Button>Button</Button>
          </ButtonToolbar>
        </div>
        <hr></hr>
        <div>
          <h3>
            Disabled
          </h3>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large">Primary button</Button>
            <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>
          </ButtonToolbar>
          <ButtonToolbar style={{marginTop: 10 + "px"}}>
            <Button bsSize="large">Button</Button>
            <Button bsSize="large" disabled>Button</Button>
          </ButtonToolbar>
        </div>
        <hr></hr>
        <div>
          <h3 data-toggle="collapse" data-target="#button-props-table" style={{cursor: "pointer"}}>
            Props
          </h3>
          <div id="button-props-table" class="collapse">
            <Table striped bordered>
              <thead>
                <tr>
                  <td>Name	</td><td>Type	</td><td>Default	</td><td>Description</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>active	</td><td>boolean</td><td>false	</td><td></td>
                </tr>
                <tr>
                  <td>block	</td><td>boolean</td><td>false	</td><td></td>
                </tr>
                <tr>
                  <td>bsClass	</td><td>string</td><td>'btn'	</td><td>Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.</td>
                </tr>
                <tr>
                  <td>bsSize	</td><td>one of: "lg", "large", "sm", "small", "xs", "xsmall"</td><td></td><td>Component size variations.</td>
                </tr>
                <tr>
                  <td>bsStyle	</td><td>one of: "success", "warning", "danger", "info", "default", "primary", "link"</td><td>'default'	</td><td>Component visual or contextual style variants.</td>
                </tr>
                <tr>
                  <td>componentClass	</td><td>elementType</td><td></td><td>You can use a custom element type for this component.</td>
                </tr>
                <tr>
                  <td>disabled	</td><td>boolean</td><td>false	</td><td></td>
                </tr>
                <tr>
                  <td>href	</td><td>string</td><td></td><td></td>
                </tr>
                <tr>
                  <td>onClick	</td><td>function</td><td></td><td></td>
                </tr>
                <tr>
                  <td>type	</td><td>one of: 'button', 'reset', 'submit'</td><td>'button'	</td><td>Defines HTML button type attribute</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    )
  }
}
