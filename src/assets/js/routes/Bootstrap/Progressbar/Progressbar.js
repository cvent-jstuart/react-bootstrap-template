import React from "react";

import { ProgressBar, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class ProgressbarsRoute extends React.Component {
  render() {
    const now = 60;
    return (
      <div className="body">

        <PageHeader>Progress Bars</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                title="Basic Example"
                subtitle="Default Progress Bar."
              />

              <ComponentExample>
                <ProgressBar now={now} />
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
                title="With Label"
                subtitle="Add a label prop to show a visible percentage. For low percentages, consider adding a min-width to ensure the label's text is fully visible."
              />

              <ComponentExample>
                <ProgressBar now={now} label={`${now}%`} />
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
                title="Screenreader only label"
                subtitle="Add a srOnly prop to hide the label visually."
              />

              <ComponentExample>
                <ProgressBar now={now} label={`${now}%`} srOnly />
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
                title="Contextual Alternatives"
                subtitle="Progress bars use some of the same button and alert classes for consistent styles."
              />

              <ComponentExample>
                <ProgressBar bsStyle="success" now={40} />
                <ProgressBar bsStyle="info" now={20} />
                <ProgressBar bsStyle="warning" now={60} />
                <ProgressBar bsStyle="danger" now={80} />
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
                title="Striped"
                subtitle="Uses a gradient to create a striped effect. Not available in IE8."
              />

              <ComponentExample>
                <ProgressBar striped bsStyle="success" now={40} />
                <ProgressBar striped bsStyle="info" now={20} />
                <ProgressBar striped bsStyle="warning" now={60} />
                <ProgressBar striped bsStyle="danger" now={80} />
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
                title="Animated"
                subtitle="Add active prop to animate the stripes right to left. Not available in IE9 and below."
              />

              <ComponentExample>
                <ProgressBar active bsStyle="success" now={40} />
                <ProgressBar active bsStyle="info" now={20} />
                <ProgressBar active bsStyle="warning" now={60} />
                <ProgressBar active bsStyle="danger" now={80} />
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
                title="Stacked"
                subtitle="Nest <ProgressBar />s to stack them."
              />

              <ComponentExample>
                <ProgressBar>
                  <ProgressBar striped bsStyle="success" now={35} key={1} />
                  <ProgressBar bsStyle="warning" now={20} key={2} />
                  <ProgressBar active bsStyle="danger" now={10} key={3} />
                </ProgressBar>
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
                title="Progress Bar Props"
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
                				active
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
                				bsClass
                			</td>
                			<td>
                				<div>
                					string
                				</div>
                			</td>
                			<td>
                				'progress-bar'
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
                				&nbsp;
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
                				children
                			</td>
                			<td>
                				<div>
                					onlyProgressBar
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
                				label
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
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				max
                			</td>
                			<td>
                				<div>
                					number
                				</div>
                			</td>
                			<td>
                				100
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				min
                			</td>
                			<td>
                				<div>
                					number
                				</div>
                			</td>
                			<td>
                				0
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				now
                			</td>
                			<td>
                				<div>
                					number
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
                		<tr>
                			<td>
                				striped
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
