import React from "react";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Table, FormGroup, FormControl, Button, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class NavBarsRoute extends React.Component {
  render() {

    return (
      <div className="body">

        <PageHeader>Navbars</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader title="Navbar Basic Example" />

              <ComponentExample>
                <Navbar>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                  </Navbar.Header>
                  <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}>Action</MenuItem>
                      <MenuItem eventKey={3.2}>Another action</MenuItem>
                      <MenuItem eventKey={3.3}>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                  </Nav>
                </Navbar>
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
                title="Responsive Navbars"
                subtitle={["To have a mobile friendly Navbar, Add a Navbar.Toggle to your Header and wrap your Navs in a Navbar.Collapse component. The Navbar will automatically wire the toggle and collapse together!","By setting the prop defaultExpanded the Navbar will start expanded by default. You can also finely control the collapsing behavior by using the expanded and onToggle props."]}
              />

              <ComponentExample>
                <Navbar inverse>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav>
                      <NavItem eventKey={1} href="#">Link</NavItem>
                      <NavItem eventKey={2} href="#">Link</NavItem>
                      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                      </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                      <NavItem eventKey={1} href="#">Link Right</NavItem>
                      <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
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
                title="Forms"
                subtitle="Use the Navbar.Form convenience component to apply proper margins and alignment to form components."
              />

              <ComponentExample>
                <Navbar>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#">Brand</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                      <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                      </FormGroup>
                      {' '}
                      <Button type="submit">Submit</Button>
                    </Navbar.Form>
                  </Navbar.Collapse>
                </Navbar>
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
                title="Text and Non-nav links"
                subtitle="Loose text and links can be wraped in the convenience components: Navbar.Link and Navbar.Text"
              />

              <ComponentExample>
                <Navbar>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#">Brand</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Navbar.Text>
                      Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
                    </Navbar.Text>
                    <Navbar.Text pullRight>
                      Have a great day!
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Navbar>
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

              <PropTable title="Navbar props">
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
                				bsStyle
                			</td>
                			<td>
                				<div>
                					one of:
                					<code>
                						"default"
                					</code>
                					,
                					<code>
                						"inverse"
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
                				componentClass
                			</td>
                			<td>
                				<div>
                					elementType
                				</div>
                			</td>
                			<td>
                				'nav'
                			</td>
                			<td>
                				<div>
                					<p>
                						Set a custom element for this component.
                					</p>
                				</div>
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
                				<div>
                					<small>
                						<em>
                							&nbsp;controlled by:
                							<code>
                								onToggle
                							</code>
                							, initial prop:
                							<code>
                								defaultExpanded
                							</code>
                						</em>
                					</small>
                				</div>
                				<div>
                					<p>
                						Explicitly set the visiblity of the navbar body
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				fixedBottom
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
                						Create a fixed navbar along the bottom of the screen, that scrolls with the page
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				fixedTop
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
                						Create a fixed navbar along the top of the screen, that scrolls with the page
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				fluid
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
                						Allow the Navbar to fluidly adjust to the page or container width, instead of at the predefined screen breakpoints
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				inverse
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
                						An alternative dark visual style for the Navbar
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				onToggle
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
                								navExpanded
                							</code>
                						</em>
                					</small>
                				</div>
                				<div>
                					<p>
                						A callback fired when the
                						<code>
                							&lt;Navbar&gt;
                						</code>
                						 body collapses or expands. Fired when a
                						<code>
                							&lt;Navbar.Toggle&gt;
                						</code>
                						 is clicked and called with the new
                						<code>
                							navExpanded
                						</code>
                						 boolean value.
                					</p>
                				</div>
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
                		<tr>
                			<td>
                				staticTop
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
                						Create a full-width navbar that scrolls away with the page
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

              <PropTable title="Navbar.Toggle props">
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
                				children
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
                				<div>
                					<p>
                						The toggle content, if left empty it will render the default toggle (seen above).
                					</p>
                				</div>
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
