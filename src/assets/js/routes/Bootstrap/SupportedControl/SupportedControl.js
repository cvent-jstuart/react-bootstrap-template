import React from "react";

import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class SupportedControlsRoute extends React.Component {
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
    const FieldGroup = ({ id, label, help, ...props }) => {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }

    return (
      <div className="body">

        <PageHeader>Supported Controls <small>Checkbox, Radio, FormControl.Static, HelpBlock</small></PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                subtitle="Examples of standard form controls supported in an example form layout, using a custom <FieldGroup> component. Use <FormControl> for <input>, <textarea>, and <select>. Use <Checkbox> and <Radio> for checkboxes and radios respectively, optionally with inline to render multiple on the same line. Use <FormControl.Static> for static text."
              />

              <ComponentExample>
                <form>
                  <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Text"
                    placeholder="Enter text"
                  />
                  <FieldGroup
                    id="formControlsEmail"
                    type="email"
                    label="Email address"
                    placeholder="Enter email"
                  />
                  <FieldGroup
                    id="formControlsPassword"
                    label="Password"
                    type="password"
                  />
                  <FieldGroup
                    id="formControlsFile"
                    type="file"
                    label="File"
                    help="Example block-level help text here."
                  />

                  <Checkbox checked readOnly>
                    Checkbox
                  </Checkbox>
                  <Radio checked readOnly>
                    Radio
                  </Radio>

                  <FormGroup>
                    <Checkbox inline>
                      1
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                      2
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                      3
                    </Checkbox>
                  </FormGroup>
                  <FormGroup>
                    <Radio inline>
                      1
                    </Radio>
                    {' '}
                    <Radio inline>
                      2
                    </Radio>
                    {' '}
                    <Radio inline>
                      3
                    </Radio>
                  </FormGroup>

                  <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                      <option value="select">select</option>
                      <option value="other">...</option>
                    </FormControl>
                  </FormGroup>
                  <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>Multiple select</ControlLabel>
                    <FormControl componentClass="select" multiple>
                      <option value="select">select (multiple)</option>
                      <option value="other">...</option>
                    </FormControl>
                  </FormGroup>

                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Textarea</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea" />
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>Static text</ControlLabel>
                    <FormControl.Static>
                      email@example.com
                    </FormControl.Static>
                  </FormGroup>

                  <Button type="submit">
                    Submit
                  </Button>
                </form>
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
                title="Checkbox Props"
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
                				'checkbox'
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
                				false
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				inline
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
                				inputRef
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
                						Attaches a ref to the
                						<code>
                							&lt;input&gt;
                						</code>
                						 element. Only functions can be used here.
                					</p>
                					<pre>
                						<code>
                							&lt;Checkbox inputRef=&#123;ref =&gt; &#123; this.input = ref; &#125;&#125; /&gt;
                						</code>
                					</pre>
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
                				<div>
                					<p>
                						Only valid if
                						<code>
                							inline
                						</code>
                						 is not set.
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
                title="Radio Props"
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
                				'radio'
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
                				false
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				inline
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
                				inputRef
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
                						Attaches a ref to the
                						<code>
                							&lt;input&gt;
                						</code>
                						 element. Only functions can be used here.
                					</p>
                					<pre>
                						<code>
                							&lt;Radio inputRef=&#123;ref =&gt; &#123; this.input = ref; &#125;&#125; /&gt;
                						</code>
                					</pre>
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
                				<div>
                					<p>
                						Only valid if
                						<code>
                							inline
                						</code>
                						 is not set.
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
                title="FormControl.Static Props"
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
                				'form-control-static'
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
                				'p'
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
                title="HelpBlock Props"
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
                				'help-block'
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
