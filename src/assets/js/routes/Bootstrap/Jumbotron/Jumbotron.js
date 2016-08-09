import React from "react";

import { Jumbotron, Button, Table } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class JumbotronsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h3>Jumbotrons</h3>
        </div>
        <div className="container">
          <div>

            <ComponentHeader
              title="Jumbotron"
              subtitle="A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site."
            />

            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <p><Button bsStyle="primary">Learn more</Button></p>
            </Jumbotron>

          </div>
          <hr></hr>
          <div>

            <PropTable
              title="Jumbotron Props"
            >
              <Table striped bordered>
                <thead>
              		<tr>
              			<th>
              				Name
              			</th>
              			<th>
              				Type
              			</th>
              			<th>
              				Default
              			</th>
              			<th>
              				Description
              			</th>
              		</tr>
              	</thead>
              	<tbody>
              		<tr>
              			<td>
              				bsClass
              			</td>
              			<td>
              				<div>
              					string
              				</div>
              			</td>
              			<td>
              				'jumbotron'
              			</td>
              			<td>
              				<div>
              					<p>
              						Base CSS class and prefix for the component. Generally one should only change
              						<code>
              							bsClass
              						</code>
              						 to provide new, non-Bootstrap, CSS styles for a component.
              					</p>
              				</div>
              			</td>
              		</tr>
              		<tr>
              			<td>
              				componentClass
              			</td>
              			<td>
              				<div>
              					elementType
              				</div>
              			</td>
              			<td>
              				'div'
              			</td>
              			<td>
              				<div>
              					<p>
              						You can use a custom element type for this component.
              					</p>
              				</div>
              			</td>
              		</tr>
              	</tbody>
              </Table>
            </PropTable>

          </div>
        </div>
      </div>
    )
  }
}
