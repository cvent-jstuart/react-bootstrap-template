import React from "react";

import { Thumbnail, Button, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class ThumbnailsRoute extends React.Component {
  render() {
    const imgsrc = "https://pbs.twimg.com/profile_images/615993481685794816/vMhSLk-2.jpg";

    return (
      <div className="body">

        <PageHeader>Thumbnails</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                title="Anchor Thumbnail"
                subtitle="Creates an anchor wrapping an image."
              />

              <ComponentExample>
                <Grid>
                  <Row>
                    <Col xs={6} md={3}>
                      <Thumbnail href="#" alt="171x180" src={imgsrc} />
                    </Col>
                    <Col xs={6} md={3}>
                      <Thumbnail href="#" alt="171x180" src={imgsrc} />
                    </Col>
                    <Col xs={6} md={3}>
                      <Thumbnail href="#" alt="171x180" src={imgsrc} />
                    </Col>
                  </Row>
                </Grid>
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
                title="Divider Thumbnail"
                subtitle="Creates a divider wrapping an image and other children elements."
              />

              <ComponentExample>
                <Grid>
                  <Row>
                    <Col xs={6} md={4}>
                      <Thumbnail src={imgsrc} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                          <Button bsStyle="primary">Button</Button>&nbsp;
                          <Button bsStyle="default">Button</Button>
                        </p>
                      </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                      <Thumbnail src={imgsrc} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                          <Button bsStyle="primary">Button</Button>&nbsp;
                          <Button bsStyle="default">Button</Button>
                        </p>
                      </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                      <Thumbnail src={imgsrc} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                          <Button bsStyle="primary">Button</Button>&nbsp;
                          <Button bsStyle="default">Button</Button>
                        </p>
                      </Thumbnail>
                    </Col>
                  </Row>
                </Grid>
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
                title="Thumbnail Props"
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
                				alt
                			</td>
                			<td>
                				<div>
                					string
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
                				bsClass
                			</td>
                			<td>
                				<div>
                					string
                				</div>
                			</td>
                			<td>
                				'thumbnail'
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
                				href
                			</td>
                			<td>
                				<div>
                					string
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
                				src
                			</td>
                			<td>
                				<div>
                					string
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
