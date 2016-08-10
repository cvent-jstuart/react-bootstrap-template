import React from "react";

import { Table, PageHeader, Grid, Row, Col, Panel, PanelGroup, Button, ListGroup, ListGroupItem, Accordion } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class PanelsRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      activeKey: 1
    }
    this.handleSelect =  this.handleSelect.bind(this);
  }

  handleClick() {
    alert('You have clicked on me');
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    const title = (
      <h3>Panel with h3 title</h3>
    );

    return (
      <div className="body">

        <PageHeader>Panels <small>Panel, PanelGroup, Accordion</small></PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                title="Basic example"
                subtitle={["By default, all the <Panel /> does is apply some basic border and padding to contain some content.",
                "You can pass on any additional properties you need, e.g. a custom onClick handler, as it is shown in the example code. They all will apply to the wrapper div element."]}
              />

              <ComponentExample>
                <Panel onClick={ this.handleClick }>
                  Basic panel example
                </Panel>
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
                title="Collapsible Panel"
              />

              <ComponentExample>
                <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
                  Click to Expand
                </Button>
                <Panel collapsible expanded={this.state.open}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Panel>
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
                title="Panel with heading"
                subtitle="Easily add a heading container to your panel with the header prop."
              />

              <ComponentExample>
                <Panel header="Panel heading without title">
                  Panel content
                </Panel>
                <Panel header={title}>
                  Panel content
                </Panel>
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
                title="Panel with footer"
                subtitle="Pass buttons or secondary text in the footer prop. Note that panel footers do not inherit colors and borders when using contextual variations as they are not meant to be in the foreground."
              />

              <ComponentExample>
                <Panel footer="Panel footer">
                  Panel content
                </Panel>
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
                title="Contextual Alternatives"
                subtitle="Like other components, easily make a panel more meaningful to a particular context by adding a bsStyle prop."
              />

              <ComponentExample>
                <Panel header={title}>
                  Panel content
                </Panel>

                <Panel header={title} bsStyle="primary">
                  Panel content
                </Panel>

                <Panel header={title} bsStyle="success">
                  Panel content
                </Panel>

                <Panel header={title} bsStyle="info">
                  Panel content
                </Panel>

                <Panel header={title} bsStyle="warning">
                  Panel content
                </Panel>

                <Panel header={title} bsStyle="danger">
                  Panel content
                </Panel>
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
                title="With tables and list groups"
                subtitle="Add the fill prop to <Table /> or <ListGroup /> elements to make them fill the panel."
              />

              <ComponentExample>
                <Panel collapsible defaultExpanded header="Panel heading">
                  Some default panel content here.
                  <ListGroup fill>
                    <ListGroupItem>Item 1</ListGroupItem>
                    <ListGroupItem>Item 2</ListGroupItem>
                    <ListGroupItem>&hellip;</ListGroupItem>
                  </ListGroup>
                  Some more panel content here.
                </Panel>
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
                title="Controlled PanelGroups"
                subtitle="PanelGroups can be controlled by a parent component. The activeKey prop dictates which panel is open."
              />

              <ComponentExample>
                <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                  <Panel header="Panel 1" eventKey={1}>Panel 1 content</Panel>
                  <Panel header="Panel 2" eventKey={2}>Panel 2 content</Panel>
                  <Panel header="Panel 3" eventKey={3}>Panel 3 content</Panel>
                </PanelGroup>
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
                title="Uncontrolled PanelGroups"
                subtitle="PanelGroups can also be uncontrolled where they manage their own state. The defaultActiveKey prop dictates which panel is open when initially."
              />

              <ComponentExample>
                <PanelGroup defaultActiveKey={1} accordion>
                  <Panel header="Panel 1" eventKey={1}>Panel 1 content</Panel>
                  <Panel header="Panel 2" eventKey={2}>Panel 2 content</Panel>
                  <Panel header="Panel 3" eventKey={3}>Panel 3 content</Panel>
                </PanelGroup>
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
                title="Accordions"
                subtitle="<Accordion /> aliases <PanelGroup accordion />."
              />

              <ComponentExample>
                <Accordion>
                  <Panel header="Collapsible Group Item #1" eventKey="1">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
                  </Panel>
                  <Panel header="Collapsible Group Item #2" eventKey="2">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
                  </Panel>
                  <Panel header="Collapsible Group Item #3" eventKey="3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
                  </Panel>
                </Accordion>
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

              <PropTable title="Panels, Accordion Props" >
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
                				'panel'
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
                					,
                					<code>
                						"default"
                					</code>
                					,
                					<code>
                						"primary"
                					</code>
                				</div>
                			</td>
                			<td>
                				'default'
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
                				collapsible
                			</td>
                			<td>
                				<div>
                					boolean
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
                				defaultExpanded
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
                				eventKey
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
                				expanded
                			</td>
                			<td>
                				<div>
                					boolean
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
                				footer
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
                				headerRole
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
                				id
                			</td>
                			<td>
                				<div>
                					string | number
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
                				onEnter
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
                				onEntered
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
                				onEntering
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
                				onExit
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
                				onExited
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
                				onExiting
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
                				onSelect
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
                				panelRole
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
          <Row>
            <Col>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>

              <PropTable title="PanelGroup Props" >
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
                				accordion
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
                				activeKey
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
                				'panel-group'
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
                				defaultActiveKey
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
                				onSelect
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
                				role
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
