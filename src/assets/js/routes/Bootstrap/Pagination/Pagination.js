import React from "react";

import { Pagination, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class PaginationsRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: 1
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    return (
      <div className="body">

        <PageHeader>Paginations</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                title="Pagination Example"
                subtitle="Provide pagination links for your site or app with the multi-page pagination component. Set items to the number of pages. activePage prop dictates which page is active."
              />

              <ComponentExample>
                <div>
                  <div>bsSize="large"</div>
                  <Pagination
                    bsSize="large"
                    items={10}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect} />
                  <br />

                  <div>bsSize="medium"</div>
                  <Pagination
                    bsSize="medium"
                    items={10}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect} />
                  <br />

                  <div>bsSize="small"</div>
                  <Pagination
                    bsSize="small"
                    items={10}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect} />
                </div>
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
                title="More options"
                subtitle="such as first, last, previous, next, boundaryLinks and ellipsis."
              />

              <ComponentExample>
                <Pagination
                  prev
                  next
                  first
                  last
                  ellipsis
                  boundaryLinks
                  items={20}
                  maxButtons={5}
                  activePage={this.state.activePage}
                  onSelect={this.handleSelect}
                />
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

              <PropTable title="Pagination props">
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
                				activePage
                			</td>
                			<td>
                				<div>
                					number
                				</div>
                			</td>
                			<td>
                				1
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				boundaryLinks
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
                						When
                						<code>
                							true
                						</code>
                						, will display the first and the last button page
                					</p>
                				</div>
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
                				'pagination'
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
                				buttonComponentClass
                			</td>
                			<td>
                				<div>
                					elementType
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						You can use a custom element for the buttons
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				ellipsis
                			</td>
                			<td>
                				<div>
                					boolean | node
                				</div>
                			</td>
                			<td>
                				true
                			</td>
                			<td>
                				<div>
                					<p>
                						When
                						<code>
                							true
                						</code>
                						, will display the default node value ('&hellip;'). Otherwise, will display provided node (when specified).
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				first
                			</td>
                			<td>
                				<div>
                					boolean | node
                				</div>
                			</td>
                			<td>
                				false
                			</td>
                			<td>
                				<div>
                					<p>
                						When
                						<code>
                							true
                						</code>
                						, will display the default node value ('&laquo;'). Otherwise, will display provided node (when specified).
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				items
                			</td>
                			<td>
                				<div>
                					number
                				</div>
                			</td>
                			<td>
                				1
                			</td>
                			<td>
                				&nbsp;
                			</td>
                		</tr>
                		<tr>
                			<td>
                				last
                			</td>
                			<td>
                				<div>
                					boolean | node
                				</div>
                			</td>
                			<td>
                				false
                			</td>
                			<td>
                				<div>
                					<p>
                						When
                						<code>
                							true
                						</code>
                						, will display the default node value ('&raquo;'). Otherwise, will display provided node (when specified).
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				maxButtons
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
                				next
                			</td>
                			<td>
                				<div>
                					boolean | node
                				</div>
                			</td>
                			<td>
                				false
                			</td>
                			<td>
                				<div>
                					<p>
                						When
                						<code>
                							true
                						</code>
                						, will display the default node value ('&rsaquo;'). Otherwise, will display provided node (when specified).
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				onSelect
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
                		<tr>
                			<td>
                				prev
                			</td>
                			<td>
                				<div>
                					boolean | node
                				</div>
                			</td>
                			<td>
                				false
                			</td>
                			<td>
                				<div>
                					<p>
                						When
                						<code>
                							true
                						</code>
                						, will display the default node value ('&lsaquo;'). Otherwise, will display provided node (when specified).
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
