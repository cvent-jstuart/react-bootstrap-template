import React from "react";

import { Pager, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class PagersRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <PageHeader>Pagers</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader title="Centers by default" />

              <ComponentExample>
                <Pager>
                  <Pager.Item href="#">Previous</Pager.Item>
                  {' '}
                  <Pager.Item href="#">Next</Pager.Item>
                </Pager>
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
                title="Aligned"
                subtitle="Set the previous or next prop to true, to align left or right."
              />

              <ComponentExample>
                <Pager>
                  <Pager.Item previous href="#">&larr; Previous Page</Pager.Item>
                  <Pager.Item next href="#">Next Page &rarr;</Pager.Item>
                </Pager>
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
                title="Disabled"
                subtitle="Set the disabled prop to true to disable the link."
              />

              <ComponentExample>
                <Pager>
                  <Pager.Item previous href="#">&larr; Previous</Pager.Item>
                  <Pager.Item disabled next href="#">Next &rarr;</Pager.Item>
                </Pager>
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

              <PropTable title="Pagination props" subtitle="There are no public props for the Pager.Item component.">
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
                				'pager'
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
