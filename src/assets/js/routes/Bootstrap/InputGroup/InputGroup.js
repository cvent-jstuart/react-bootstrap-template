import React from "react";

import { Form, FormGroup, FormControl, InputGroup, Button, DropdownButton, MenuItem, Glyphicon, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class FormLayoutsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <PageHeader>Input Groups <small>InputGroup, InputGroup.Addon, InputGroup.Button</small></PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                title="Input Add-ons"
                subtitle="Wrap your form control in an <InputGroup>, then use for normal add-ons and for button add-ons. Exotic configurations may require CSS on your side."
              />

              <ComponentExample>
                <form>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>@</InputGroup.Addon>
                      <FormControl type="text" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <FormControl type="text" />
                      <InputGroup.Addon>.00</InputGroup.Addon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                      <FormControl type="text" />
                      <InputGroup.Addon>.00</InputGroup.Addon>
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup>
                      <FormControl type="text" />
                      <InputGroup.Addon>
                        <Glyphicon glyph="music" />
                      </InputGroup.Addon>
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Button>
                        <Button>Before</Button>
                      </InputGroup.Button>
                      <FormControl type="text" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <FormControl type="text" />
                      <DropdownButton
                        componentClass={InputGroup.Button}
                        id="input-dropdown-addon"
                        title="Action"
                      >
                        <MenuItem key="1">Item</MenuItem>
                      </DropdownButton>
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>
                        <input type="radio" aria-label="..." />
                      </InputGroup.Addon>
                      <FormControl type="text" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>
                        <input type="checkbox" aria-label="..." />
                      </InputGroup.Addon>
                      <FormControl type="text" />
                    </InputGroup>
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

              <ComponentHeader
                title="Input sizes"
                subtitle="Use bsSize on <FormGroup> or <InputGroup> to change the size of inputs. It also works with add-ons and most other options."
              />

              <ComponentExample>
                <form>
                  <FormGroup bsSize="large">
                    <FormControl type="text" placeholder="Large text" />
                  </FormGroup>
                  <FormGroup>
                    <FormControl type="text" placeholder="Normal text" />
                  </FormGroup>
                  <FormGroup bsSize="small">
                    <FormControl type="text" placeholder="Small text" />
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
                title="InputGroup"
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
                				'input-group'
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
                title="InputGroup.Addon"
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
                				'input-group-addon'
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
          <Row>
            <Col>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>

              <PropTable
                title="InputGroup.Button"
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
                				'input-group-btn'
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
