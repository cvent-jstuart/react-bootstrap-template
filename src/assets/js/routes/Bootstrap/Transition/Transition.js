import React from "react";

import { Collapse, Fade, Button, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class TransitionsRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      collapse: false,
      fade: false
    }
  }

  render() {
    return (
      <div className="body">

        <PageHeader>Transitions</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                title="Collapse"
                subtitle="Add a collapse toggle animation to an element or component."
              />

              <ComponentExample>
                <Button onClick={ ()=> this.setState({ collapse: !this.state.collapse })}>
                  Toggle Collapse
                </Button>
                <Collapse in={this.state.collapse}>
                  <div>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </div>
                </Collapse>
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
                title="Fade"
                subtitle="Add a fade animation to a child element or component."
              />

              <ComponentExample>
                <Button onClick={()=> this.setState({ fade: !this.state.fade })}>
                  Toggle Fade
                </Button>
                <Fade in={this.state.fade}>
                  <div>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </div>
                </Fade>
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

              <PropTable
                title="Collapse Props"
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
                				dimension
                			</td>
                			<td>
                				<div>
                					one of:
                					<code>
                						'height'
                					</code>
                					,
                					<code>
                						'width'
                					</code>
                					 | function
                				</div>
                			</td>
                			<td>
                				'height'
                			</td>
                			<td>
                				<div>
                					<p>
                						The dimension used when collapsing, or a function that returns the dimension
                					</p>
                					<p>
                						<em>
                							Note: Bootstrap only partially supports 'width'! You will need to supply your own CSS animation for the
                							<code>
                								.width
                							</code>
                							 CSS class.
                						</em>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				getDimensionValue
                			</td>
                			<td>
                				<div>
                					function
                				</div>
                			</td>
                			<td>
                				getDimensionValue
                			</td>
                			<td>
                				<div>
                					<p>
                						Function that returns the height or width of the animating DOM node
                					</p>
                					<p>
                						Allows for providing some custom logic for how much the Collapse component should animate in its specified dimension. Called with the current dimension prop value and the DOM node.
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				in
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
                						Show the component; triggers the expand or collapse animation
                					</p>
                				</div>
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
                						Callback fired before the component expands
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
                						Callback fired after the component has expanded
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
                						Callback fired after the component starts to expand
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
                						Callback fired before the component collapses
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
                						Callback fired after the component has collapsed
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
                						Callback fired after the component starts to collapse
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
                				<div>
                					<p>
                						ARIA role of collapsible element
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				timeout
                			</td>
                			<td>
                				<div>
                					number
                				</div>
                			</td>
                			<td>
                				300
                			</td>
                			<td>
                				<div>
                					<p>
                						Duration of the collapse animation in milliseconds, to ensure that finishing callbacks are fired even if the original browser transition end events are canceled
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				transitionAppear
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
                						Run the expand animation when the component mounts, if it is initially shown
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
                						Unmount the component (remove it from the DOM) when it is collapsed
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

              <PropTable
                title="Fade Props"
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
                				in
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
                						Show the component; triggers the fade in or fade out animation
                					</p>
                				</div>
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
                						Callback fired before the component fades in
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
                						Callback fired after the has component faded in
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
                						Callback fired after the component starts to fade in
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
                						Callback fired before the component fades out
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
                						Callback fired after the component has faded out
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
                						Callback fired after the component starts to fade out
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				timeout
                			</td>
                			<td>
                				<div>
                					number
                				</div>
                			</td>
                			<td>
                				300
                			</td>
                			<td>
                				<div>
                					<p>
                						Duration of the fade animation in milliseconds, to ensure that finishing callbacks are fired even if the original browser transition end events are canceled
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				transitionAppear
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
                						Run the fade in animation when the component mounts, if it is initially shown
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
                						Unmount the component (remove it from the DOM) when it is faded out
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
