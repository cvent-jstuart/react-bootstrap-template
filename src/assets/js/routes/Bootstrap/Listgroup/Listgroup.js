import React from "react";

import { ListGroup, ListGroupItem, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

class CustomComponent extends React.Component {
  render() {
    return (
      <li
        className="list-group-item"
        onClick={() => {alert(this.props.children)}}>
        {this.props.children}
      </li>
    );
  }
};

export default class ListGroupsRoute extends React.Component {
  alertClicked() {
    alert('You clicked the third ListGroupItem');
  }

  render() {
    return (
      <div className="body">

        <PageHeader>List group <small>ListGroup, ListGroupItem</small></PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader title="Centers by default" />

              <ComponentExample>
                <ListGroup>
                  <ListGroupItem>Item 1</ListGroupItem>
                  <ListGroupItem>Item 2</ListGroupItem>
                  <ListGroupItem>Item 3</ListGroupItem>
                </ListGroup>
              </ComponentExample>

            </Col>
          </Row>
          <Row>
            <Col>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>

              <ComponentHeader
                title="Linked"
                subtitle="Set the href or onClick prop on ListGroupItem, to create a linked or clickable element."
              />

              <ComponentExample>
                <ListGroup>
                  <ListGroupItem href="#link1">Link 1</ListGroupItem>
                  <ListGroupItem href="#link2">Link 2</ListGroupItem>
                  <ListGroupItem onClick={this.alertClicked}>
                    Trigger an alert
                  </ListGroupItem>
                </ListGroup>
              </ComponentExample>

            </Col>
          </Row>
          <Row>
            <Col>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>

              <ComponentHeader
                title="Styleing by state"
                subtitle="Set the active or disabled prop to true to mark or disable the item."
              />

              <ComponentExample>
                <ListGroup>
                  <ListGroupItem href="#" active>Link 1</ListGroupItem>
                  <ListGroupItem href="#">Link 2</ListGroupItem>
                  <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
                </ListGroup>
              </ComponentExample>

            </Col>
          </Row>
          <Row>
            <Col>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>

              <ComponentHeader
                title="Styling by color"
                subtitle="Set the bsStyle props to style the item."
              />

              <ComponentExample>
                <ListGroup>
                  <ListGroupItem bsStyle="success">Success</ListGroupItem>
                  <ListGroupItem bsStyle="info">Info</ListGroupItem>
                  <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
                  <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
                </ListGroup>
              </ComponentExample>

            </Col>
          </Row>
          <Row>
            <Col>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>

              <ComponentHeader
                title="With header"
                subtitle="Set the header prop to create a structured item, with a heading and a body area."
              />

              <ComponentExample>
                <ListGroup>
                  <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
                  <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
                  <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
                </ListGroup>
              </ComponentExample>

            </Col>
          </Row>
          <Row>
            <Col>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>

              <ComponentHeader
                title="With custom component children"
                subtitle="When using ListGroupItems directly, ListGroup looks at whether the items have href or onClick props to determine which DOM elements to emit. However, with custom item components as children to ListGroup, set thecomponentClass prop to specify which element ListGroup should output."
              />

              <ComponentExample>
                <ListGroup componentClass="ul">
                  <CustomComponent>Custom Child 1 </CustomComponent>
                  <CustomComponent>Custom Child 2 </CustomComponent>
                  <CustomComponent>Custom Child 3</CustomComponent>
                </ListGroup>
              </ComponentExample>

            </Col>
          </Row>
          <Row>
            <Col>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>

              <PropTable title="ListGroup Props" >
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
                				'list-group'
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
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						You can use a custom element type for this component.
                					</p>
                					<p>
                						If not specified, it will be treated as
                						<code>
                							'li'
                						</code>
                						 if every child is a non-actionable
                						<code>
                							&lt;ListGroupItem&gt;
                						</code>
                						, and
                						<code>
                							'div'
                						</code>
                						 otherwise.
                					</p>
                				</div>
                			</td>
                		</tr>
                	</tbody>
                </Table>
              </PropTable>

            </Col>
          </Row>
          <Row>
            <Col>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>

              <PropTable title="ListGroupItem" >
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
                				active
                			</td>
                			<td>
                				<div>
                					any
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
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
                				'list-group-item'
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
                				bsStyle
                			</td>
                			<td>
                				<div>
                					one of:
                					<code>
                						"success"
                					</code>
                					,
                					<code>
                						"warning"
                					</code>
                					,
                					<code>
                						"danger"
                					</code>
                					,
                					<code>
                						"info"
                					</code>
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						Component visual or contextual style variants.
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				disabled
                			</td>
                			<td>
                				<div>
                					any
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				header
                			</td>
                			<td>
                				<div>
                					node
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				href
                			</td>
                			<td>
                				<div>
                					string
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				listItem
                			</td>
                			<td>
                				<div>
                					boolean
                				</div>
                			</td>
                			<td>
                				false
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				onClick
                			</td>
                			<td>
                				<div>
                					function
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				type
                			</td>
                			<td>
                				<div>
                					string
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                	</tbody>
                </Table>
              </PropTable>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
