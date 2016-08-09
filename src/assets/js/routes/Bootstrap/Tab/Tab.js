import React from "react";

import { Tabs, Tab, Table, Nav, NavItem, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class TabsRoute extends React.Component {
  constructor(){
    super();
    this.state = {
      key: 1
    }
  }

  handleSelect(key) {
   alert('selected ' + key);
   this.setState({key: key});
 }

  render() {
    return (
      <div className="body">

        <PageHeader>Togglable Tabs</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                title="Uncontrolled Tabs"
                subtitle="Allow the component to control its own state."
              />

              <ComponentExample>
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                  <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                  <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                  <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
                </Tabs>
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
                title="Controlled Tabs"
                subtitle="Pass down the active state on render via props."
              />

              <ComponentExample>
                <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="controlled-tab-example">
                  <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                  <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                  <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
                </Tabs>
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
                title="No animation"
                subtitle="Set the animation prop to false."
              />

              <ComponentExample>
                <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                  <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                  <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                  <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
                </Tabs>
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
                title="Custom Tab Layout"
                subtitle={["For more complex layouts the flexible TabContainer, TabContent, andTabPane components along with any style of Nav allow you to quickly piece together your own Tabs component with additional markup needed.","Just create a set of NavItems each with an eventKey corresponding to the eventKey of a TabPane. Wrap the whole thing in a TabContainer and you have fully functioning custom tabs component. Check out the below example making use of the grid system and pills."]}
              />

              <ComponentExample>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row className="clearfix">
                    <Col sm={4}>
                      <Nav bsStyle="pills" stacked>
                        <NavItem eventKey="first">
                          Tab 1
                        </NavItem>
                        <NavItem eventKey="second">
                          Tab 2
                        </NavItem>
                        <NavItem eventKey="third">
                          Tab 3
                        </NavItem>
                        <NavItem eventKey="forth">
                          Tab 4
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content animation>
                        <Tab.Pane eventKey="first">
                          Tab 1 content
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          Tab 2 content
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          Tab 3 content
                        </Tab.Pane>
                        <Tab.Pane eventKey="forth">
                          Tab 4 content
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
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

              <PropTable title="Tabs Props" >
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
                				<div>
                					<small>
                						<em>
                							&nbsp;controlled by:
                							<code>
                								onSelect
                							</code>
                							, initial prop:
                							<code>
                								defaultActiveKey
                							</code>
                						</em>
                					</small>
                				</div>
                				<div>
                					<p>
                						Mark the Tab with a matching
                						<code>
                							eventKey
                						</code>
                						 as active.
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				animation
                			</td>
                			<td>
                				<div>
                					boolean
                				</div>
                			</td>
                			<td>
                				true
                			</td>
                			<td>
                				&nbsp;
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
                						'tabs'
                					</code>
                					,
                					<code>
                						'pills'
                					</code>
                				</div>
                			</td>
                			<td>
                				'tabs'
                			</td>
                			<td>
                				<div>
                					<p>
                						Navigation style
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				id
                			</td>
                			<td>
                				<div>
                					requiredForA11y
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
                				<div>
                					<small>
                						<em>
                							&nbsp;controls
                							<code>
                								activeKey
                							</code>
                						</em>
                					</small>
                				</div>
                				<div>
                					<p>
                						Callback fired when a Tab is selected.
                					</p>
                					<pre>
                						<code>
                							function ( Any eventKey, SyntheticEvent event?)
                						</code>
                					</pre>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				unmountOnExit
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
                				<div>
                					<p>
                						Unmount tabs (remove it from the DOM) when it is no longer visible
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

              <PropTable title="Tab Props" >
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
                				animation
                			</td>
                			<td>
                				<div>
                					boolean | elementType
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						Use animation when showing or hiding
                						<code>
                							&lt;TabPane&gt;
                						</code>
                						s. Use
                						<code>
                							false
                						</code>
                						 to disable,
                						<code>
                							true
                						</code>
                						 to enable the default
                						<code>
                							&lt;Fade&gt;
                						</code>
                						 animation or any
                						<code>
                							&lt;Transition&gt;
                						</code>
                						 component.
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				aria-labelledby
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
                				bsClass
                			</td>
                			<td>
                				<div>
                					string
                				</div>
                			</td>
                			<td>
                				'tab-pane'
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
                				disabled
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
                				<div>
                					<p>
                						Uniquely identify the
                						<code>
                							&lt;TabPane&gt;
                						</code>
                						 among its siblings.
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				id
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
                				<div>
                					<p>
                						Transition onEnter callback when animation is not
                						<code>
                							false
                						</code>
                					</p>
                				</div>
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
                				<div>
                					<p>
                						Transition onEntered callback when animation is not
                						<code>
                							false
                						</code>
                					</p>
                				</div>
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
                				<div>
                					<p>
                						Transition onEntering callback when animation is not
                						<code>
                							false
                						</code>
                					</p>
                				</div>
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
                				<div>
                					<p>
                						Transition onExit callback when animation is not
                						<code>
                							false
                						</code>
                					</p>
                				</div>
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
                				<div>
                					<p>
                						Transition onExited callback when animation is not
                						<code>
                							false
                						</code>
                					</p>
                				</div>
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
                				<div>
                					<p>
                						Transition onExiting callback when animation is not
                						<code>
                							false
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				tabClassName
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
                				<div>
                					<p>
                						tabClassName is used as className for the associated NavItem
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				title
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
                				unmountOnExit
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
                				<div>
                					<p>
                						Unmount the tab (remove it from the DOM) when it is no longer visible
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

              <PropTable title="TabContainer Props" >
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
                				<div>
                					<small>
                						<em>
                							&nbsp;controlled by:
                							<code>
                								onSelect
                							</code>
                							, initial prop:
                							<code>
                								defaultActiveKey
                							</code>
                						</em>
                					</small>
                				</div>
                				<div>
                					<p>
                						The
                						<code>
                							eventKey
                						</code>
                						 of the currently active tab.
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				generateChildId
                			</td>
                			<td>
                				<div>
                					function
                				</div>
                			</td>
                			<td>
                				(eventKey, type) =&gt; &#96;$&#123;this.props.id&#125;-$&#123;type&#125;-$&#123;key&#125;&#96;
                			</td>
                			<td>
                				<div>
                					<p>
                						A function that takes an
                						<code>
                							eventKey
                						</code>
                						 and
                						<code>
                							type
                						</code>
                						 and returns a unique id for child tab
                						<code>
                							&lt;NavItem&gt;
                						</code>
                						s and
                						<code>
                							&lt;TabPane&gt;
                						</code>
                						s. The function
                						<em>
                							must
                						</em>
                						 be a pure function, meaning it should always return the
                						<em>
                							same
                						</em>
                						 id for the same set of inputs. The default value requires that an
                						<code>
                							id
                						</code>
                						 to be set for the
                						<code>
                							&lt;TabContainer&gt;
                						</code>
                						.
                					</p>
                					<p>
                						The
                						<code>
                							type
                						</code>
                						 argument will either be
                						<code>
                							"tab"
                						</code>
                						 or
                						<code>
                							"pane"
                						</code>
                						.
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				id
                			</td>
                			<td>
                				<div>
                					custom
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						HTML id attribute, required if no
                						<code>
                							generateChildId
                						</code>
                						 prop is specified.
                					</p>
                				</div>
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
                				<div>
                					<small>
                						<em>
                							&nbsp;controls
                							<code>
                								activeKey
                							</code>
                						</em>
                					</small>
                				</div>
                				<div>
                					<p>
                						A callback fired when a tab is selected.
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

              <PropTable title="TabContent Props" >
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
                				animation
                			</td>
                			<td>
                				<div>
                					boolean | elementType
                				</div>
                			</td>
                			<td>
                				true
                			</td>
                			<td>
                				<div>
                					<p>
                						Sets a default animation strategy for all children
                						<code>
                							&lt;TabPane&gt;
                						</code>
                						s. Use
                						<code>
                							false
                						</code>
                						 to disable,
                						<code>
                							true
                						</code>
                						 to enable the default
                						<code>
                							&lt;Fade&gt;
                						</code>
                						 animation or any
                						<code>
                							&lt;Transition&gt;
                						</code>
                						 component.
                					</p>
                				</div>
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
                				'tab'
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
                		<tr>
                			<td>
                				unmountOnExit
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
                				<div>
                					<p>
                						Unmount tabs (remove it from the DOM) when they are no longer visible
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

              <PropTable title="TabPane Props" >
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
                				animation
                			</td>
                			<td>
                				<div>
                					boolean | elementType
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						Use animation when showing or hiding
                						<code>
                							&lt;TabPane&gt;
                						</code>
                						s. Use
                						<code>
                							false
                						</code>
                						 to disable,
                						<code>
                							true
                						</code>
                						 to enable the default
                						<code>
                							&lt;Fade&gt;
                						</code>
                						 animation or any
                						<code>
                							&lt;Transition&gt;
                						</code>
                						 component.
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				aria-labelledby
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
                				bsClass
                			</td>
                			<td>
                				<div>
                					string
                				</div>
                			</td>
                			<td>
                				'tab-pane'
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
                				<div>
                					<p>
                						Uniquely identify the
                						<code>
                							&lt;TabPane&gt;
                						</code>
                						 among its siblings.
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				id
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
                				<div>
                					<p>
                						Transition onEnter callback when animation is not
                						<code>
                							false
                						</code>
                					</p>
                				</div>
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
                				<div>
                					<p>
                						Transition onEntered callback when animation is not
                						<code>
                							false
                						</code>
                					</p>
                				</div>
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
                				<div>
                					<p>
                						Transition onEntering callback when animation is not
                						<code>
                							false
                						</code>
                					</p>
                				</div>
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
                				<div>
                					<p>
                						Transition onExit callback when animation is not
                						<code>
                							false
                						</code>
                					</p>
                				</div>
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
                				<div>
                					<p>
                						Transition onExited callback when animation is not
                						<code>
                							false
                						</code>
                					</p>
                				</div>
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
                				<div>
                					<p>
                						Transition onExiting callback when animation is not
                						<code>
                							false
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				unmountOnExit
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
                				<div>
                					<p>
                						Unmount the tab (remove it from the DOM) when it is no longer visible
                					</p>
                				</div>
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
