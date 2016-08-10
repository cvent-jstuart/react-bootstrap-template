import React from "react";

import { ControlLabel, FormGroup, FormControl, HelpBlock, Glyphicon, InputGroup, Form, Checkbox, Radio, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class FormLayoutsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <PageHeader>Validation States <small>FormControl.Feedback</small></PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                subtitle="Set validationState to one of 'success', 'warning' or 'error'. Add <FormControl.Feedback> for a feedback icon."
              />

              <ComponentExample>
                <form>
                  <FormGroup controlId="formValidationSuccess1" validationState="success">
                    <ControlLabel>Input with success</ControlLabel>
                    <FormControl type="text" />
                    <HelpBlock>Help text with validation state.</HelpBlock>
                  </FormGroup>

                  <FormGroup controlId="formValidationWarning1" validationState="warning">
                    <ControlLabel>Input with warning</ControlLabel>
                    <FormControl type="text" />
                  </FormGroup>

                  <FormGroup controlId="formValidationError1" validationState="error">
                    <ControlLabel>Input with error</ControlLabel>
                    <FormControl type="text" />
                  </FormGroup>

                  <FormGroup controlId="formValidationSuccess2" validationState="success">
                    <ControlLabel>Input with success and feedback icon</ControlLabel>
                    <FormControl type="text" />
                    <FormControl.Feedback />
                  </FormGroup>

                  <FormGroup controlId="formValidationWarning2" validationState="warning">
                    <ControlLabel>Input with warning and feedback icon</ControlLabel>
                    <FormControl type="text" />
                    <FormControl.Feedback />
                  </FormGroup>

                  <FormGroup controlId="formValidationError2" validationState="error">
                    <ControlLabel>Input with error and feedback icon</ControlLabel>
                    <FormControl type="text" />
                    <FormControl.Feedback />
                  </FormGroup>

                  <FormGroup controlId="formValidationSuccess3" validationState="success">
                    <ControlLabel>Input with success and custom feedback icon</ControlLabel>
                    <FormControl type="text" />
                    <FormControl.Feedback>
                      <Glyphicon glyph="music" />
                    </FormControl.Feedback>
                  </FormGroup>

                  <FormGroup controlId="formValidationWarning3" validationState="warning">
                    <ControlLabel>Input group with warning</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>@</InputGroup.Addon>
                      <FormControl type="text" />
                    </InputGroup>
                    <FormControl.Feedback />
                  </FormGroup>

                  <Form componentClass="fieldset" horizontal>
                    <FormGroup controlId="formValidationError3" validationState="error">
                      <Col componentClass={ControlLabel} xs={3}>
                        Input with error
                      </Col>
                      <Col xs={9}>
                        <FormControl type="text" />
                        <FormControl.Feedback />
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formValidationSuccess4" validationState="success">
                      <Col componentClass={ControlLabel} xs={3}>
                        Input group with success
                      </Col>
                      <Col xs={9}>
                        <InputGroup>
                          <InputGroup.Addon>@</InputGroup.Addon>
                          <FormControl type="text" />
                        </InputGroup>
                        <FormControl.Feedback />
                      </Col>
                    </FormGroup>
                  </Form>

                  <Form componentClass="fieldset" inline>
                    <FormGroup controlId="formValidationWarning4" validationState="warning">
                      <ControlLabel>Input with warning</ControlLabel>
                      {' '}
                      <FormControl type="text" />
                      <FormControl.Feedback />
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formValidationError4" validationState="error">
                      <ControlLabel>Input group with error</ControlLabel>
                      {' '}
                      <InputGroup>
                        <InputGroup.Addon>@</InputGroup.Addon>
                        <FormControl type="text" />
                      </InputGroup>
                      <FormControl.Feedback />
                    </FormGroup>
                  </Form>

                  <Checkbox validationState="success">
                    Checkbox with success
                  </Checkbox>
                  <Radio validationState="warning">
                    Radio with warning
                  </Radio>
                  <Checkbox validationState="error">
                    Checkbox with error
                  </Checkbox>

                  {/* This requires React 15's <span>-less spaces to be exactly correct. */}
                  <FormGroup validationState="success">
                    <Checkbox inline>
                      Checkbox
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                      with
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                      success
                    </Checkbox>
                  </FormGroup>
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
                title="FormControl.Feedback"
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
                				'form-control-feedback'
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
