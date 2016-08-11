import React from "react";

import { Alert, Button, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class AlertsRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      alertVisible: true
    };
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }

  render() {
    return (
      <div className="body">

        <PageHeader>Alerts</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                subtitle="Basic alert styles."
              />

              <ComponentExample>
                <Alert>
                  <strong>Default!</strong> This is an alert with no bsStyle attribute.
                </Alert>
                <Alert bsStyle="success">
                  <strong>Success!</strong> This is a success alert.
                </Alert>
                <Alert bsStyle="info">
                  <strong>Info!</strong> This is an info  alert.
                </Alert>
                <Alert bsStyle="warning">
                  <strong>Warning!</strong> This is a warning alert.
                </Alert>
                <Alert bsStyle="danger">
                  <strong>Danger!</strong> This is a danger alert.
                </Alert>
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
                title="Closeable Alerts"
                subtitle="Just pass in an onDismiss function."
              />

              {this.state.alertVisible ?
                 <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                   <h4>Oh snap! You got an error!</h4>
                   <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
                   <p>
                     <Button bsStyle="danger">Take this action</Button>
                     <span> or </span>
                     <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
                   </p>
                 </Alert>
               : null }

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
                title="Alert Props"
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
                				'alert'
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
                				'info'
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
                				closeLabel
                			</td>
                			<td>
                				<div>
                					string
                				</div>
                			</td>
                			<td>
                				'Close alert'
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				onDismiss
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
