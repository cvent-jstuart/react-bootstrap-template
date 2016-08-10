import React from "react";

import { Well, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class WellsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <PageHeader>Wells</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                subtitle="Use the well as a simple effect on an element to give it an inset effect."
              />

              <div>
                <Well>Look I&apos;m in a well!</Well>
              </div>

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
                title="Optional Classes"
                subtitle="Control padding and rounded corners with two optional modifier classes."
              />

              <div>
                <Well bsSize="large">Look I&apos;m in a large well!</Well>
                <Well bsSize="small">Look I&apos;m in a small well!</Well>
              </div>

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
                title="Well Props"
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
                				'well'
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
        </Grid>
      </div>
    )
  }
}
