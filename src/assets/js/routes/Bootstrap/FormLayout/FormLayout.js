import React from "react";

import { Form, FormGroup, ControlLabel, FormControl, Checkbox, Button, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class FormLayoutsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <PageHeader>Form Layout</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                title="Inline Forms"
                subtitle="Use <Form inline> instead of <form>. JSX strips whitespace between lines, so you will need to manually add spaces. Additionally, Bootstrap assigns inline form controls width: auto by default, so you may need to set custom widths."
              />

              <ComponentExample>
                <Form inline>
                  <FormGroup controlId="formInlineName">
                    <ControlLabel>Name</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="Jane Doe" />
                  </FormGroup>
                  {' '}
                  <FormGroup controlId="formInlineEmail">
                    <ControlLabel>Email</ControlLabel>
                    {' '}
                    <FormControl type="email" placeholder="jane.doe@example.com" />
                  </FormGroup>
                  {' '}
                  <Button type="submit">
                    Send invitation
                  </Button>
                </Form>
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
                title="Horizontal Forms"
                subtitle="Use <Form horizontal> instead of <form>, then use <Col>s to align labels and controls. Do not use <Row> here, as <FormGroup> will already serve as a grid row in a horizontal form."
              />

              <ComponentExample>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      Email
                    </Col>
                    <Col sm={10}>
                      <FormControl type="email" placeholder="Email" />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                      Password
                    </Col>
                    <Col sm={10}>
                      <FormControl type="password" placeholder="Password" />
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col smOffset={2} sm={10}>
                      <Checkbox>Remember me</Checkbox>
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col smOffset={2} sm={10}>
                      <Button type="submit">
                        Sign in
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
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
                title="Form Props"
                subtitle="(only needed for horizontal or inline forms)"
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
                				'form'
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
                				'form'
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
                				horizontal
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
