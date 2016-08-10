import React from "react";

import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class FormsRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="body">

        <PageHeader>Forms <small>FormGroup, FormControl, ControlLabel</small></PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                subtitle="The <FormControl> component renders a form control with Bootstrap styling. The <FormGroup> component wraps a form control with proper spacing, along with support for a label, help text, and validation state. To ensure accessibility, set controlId on <FormGroup>, and use <ControlLabel> for the label."
              />

              <ComponentExample>
                <form>
                  <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                  >
                    <ControlLabel>Working example with validation</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="Enter text"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                  </FormGroup>
                </form>
              </ComponentExample>

              <ComponentHeader
                subtitle={["The <FormControl> component directly renders the <input> or other specified component. If you need to access the value of an uncontrolled <FormControl>, attach a ref to it as you would with an uncontrolled input, then call ReactDOM.findDOMNode(ref) to get the DOM node. You can then interact with that node as you would with any other uncontrolled input.","If your application contains a large number of form groups, we recommend building a higher-level component encapsulating a complete field group that renders the label, the control, and any other necessary components. We don&apos;t provide this out-of-the-box, because the composition of those field groups is too specific to an individual application to admit a good one-size-fits-all solution."]}
              />
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
                title="FormGroup Props"
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
                				'form-group'
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
                				bsSize
                			</td>
                			<td>
                				<div>
                					one of:
                					<code>
                						"lg"
                					</code>
                					,
                					<code>
                						"large"
                					</code>
                					,
                					<code>
                						"sm"
                					</code>
                					,
                					<code>
                						"small"
                					</code>
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						Component size variations.
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				controlId
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
                						Sets
                						<code>
                							id
                						</code>
                						 on
                						<code>
                							&lt;FormControl&gt;
                						</code>
                						 and
                						<code>
                							htmlFor
                						</code>
                						 on
                						<code>
                							&lt;FormGroup.Label&gt;
                						</code>
                						.
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				validationState
                			</td>
                			<td>
                				<div>
                					one of:
                					<code>
                						'success'
                					</code>
                					,
                					<code>
                						'warning'
                					</code>
                					,
                					<code>
                						'error'
                					</code>
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

              <PropTable
                title="FormControl Props"
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
                				'form-control'
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
                				'input'
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
                				<div>
                					<p>
                						Uses
                						<code>
                							controlId
                						</code>
                						 from
                						<code>
                							&lt;FormGroup&gt;
                						</code>
                						 if not explicitly specified.
                					</p>
                				</div>
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
                				<div>
                					<p>
                						Only relevant if
                						<code>
                							componentClass
                						</code>
                						 is
                						<code>
                							'input'
                						</code>
                						.
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
                title="ControlLabel Props"
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
                				'control-label'
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
                				htmlFor
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
                						Uses
                						<code>
                							controlId
                						</code>
                						 from
                						<code>
                							&lt;FormGroup&gt;
                						</code>
                						 if not explicitly specified.
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				srOnly
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
