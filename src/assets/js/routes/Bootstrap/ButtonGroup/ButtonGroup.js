import React from "react";

import { Button, ButtonToolbar, Table, ButtonGroup, DropdownButton, MenuItem } from "react-bootstrap";

// require("./.less");

export default class ButtonsGroupRoute extends React.Component {
  render() {
    return (
      <div className="body">

          <div class="page-header">
            <h1>Button Groups</h1>
          </div>
          <div>
            <h3>
              ButtonGroup
            </h3>
            <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </div>
          <hr></hr>
          <div>
            <h3>
              ButtonToolbar - Combine sets of &lt;ButtonGroup /&gt;s in a &lt;ButtonToolbar /&gt;
            </h3>
            <ButtonToolbar>
              <ButtonGroup>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
              </ButtonGroup>

              <ButtonGroup>
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
              </ButtonGroup>

              <ButtonGroup>
                <Button>8</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
          <hr></hr>
          <div>
            <h3>
              bsSize
            </h3>
            <ButtonToolbar>
              <ButtonGroup bsSize="large">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </ButtonToolbar>

            <ButtonToolbar style={{marginTop: 10 + "px"}}>
              <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </ButtonToolbar>

            <ButtonToolbar style={{marginTop: 10 + "px"}}>
              <ButtonGroup bsSize="small">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </ButtonToolbar>

            <ButtonToolbar style={{marginTop: 10 + "px"}}>
              <ButtonGroup bsSize="xsmall">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
          <hr></hr>
          <div>
            <h3>
              Nested Dropdown
            </h3>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </div>
          <hr></hr>
          <div>
            <h3>
              Vergical
            </h3>
            <ButtonGroup vertical>
              <Button>Button</Button>
              <Button>Button</Button>
              <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton>
              <Button>Button</Button>
              <Button>Button</Button>
              <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton>
              <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </div>
          <hr></hr>
          <div>
            <h3>
              Block
            </h3>
            <ButtonGroup vertical block>
              <Button>Full width button</Button>
              <Button>Full width button</Button>
            </ButtonGroup>
          </div>
          <hr></hr>
          <div>
            <h3>
              Justified
            </h3>
            <ButtonGroup justified>
              <Button href="#">Left</Button>
              <Button href="#">Middle</Button>
              <DropdownButton title="Dropdown" id="bg-justified-dropdown">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </div>
          <hr></hr>
          <div>
            <h3 data-toggle="collapse" data-target="#button-group-props-table" style={{cursor: "pointer"}}>
              Props
            </h3>
            <div id="button-group-props-table" class="collapse">
              <Table striped bordered>
                <thead>
                  <tr>
                    <td>Name	</td><td>Type	</td><td>Default	</td><td>Description</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>block	</td><td>boolean</td><td>false	</td><td>Display block buttons; only useful when used with the "vertical" prop.</td>
                  </tr>
                  <tr>
                    <td>bsClass	</td><td>string</td><td>'btn-group'	</td><td>Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.</td>
                  </tr>
                  <tr>
                    <td>justified	</td><td>boolean</td><td>false	</td><td></td>
                  </tr>
                  <tr>
                    <td>vertical	</td><td>boolean</td><td>false</td><td></td>
                  </tr>
                </tbody>
              </Table>
          </div>
          </div>
      </div>
    )
  }
}