import React from "react";

import { Label, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class LabelsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <PageHeader>Labels</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                subtitle="Create a <Label>label</Label> to highlight information."
              />

              <ComponentExample>
                <h1>Label <Label>New</Label></h1>
                <h2>Label <Label>New</Label></h2>
                <h3>Label <Label>New</Label></h3>
                <h4>Label <Label>New</Label></h4>
                <h5>Label <Label>New</Label></h5>
                <p>Label <Label>New</Label></p>
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
                title="Available variations"
                subtitle="Add any of the below mentioned modifier classes to change the appearance of the label."
              />

              <ComponentExample>
                <Label bsStyle="default">Default</Label>&nbsp;
                <Label bsStyle="primary">Primary</Label>&nbsp;
                <Label bsStyle="success">Success</Label>&nbsp;
                <Label bsStyle="info">Info</Label>&nbsp;
                <Label bsStyle="warning">Warning</Label>&nbsp;
                <Label bsStyle="danger">Danger</Label>
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
                title="Label Props"
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
                				'label'
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
