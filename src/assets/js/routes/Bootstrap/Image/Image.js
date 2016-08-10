import React from "react";

import { Image, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class ImagesRoute extends React.Component {
  render() {
    const imgsrc = "https://pbs.twimg.com/profile_images/615993481685794816/vMhSLk-2.jpg";

    return (
      <div className="body">

        <PageHeader>Images</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                title="Shape"
                subtitle="Use the rounded, circle, and thumbnail props to customise the image."
              />

              <ComponentExample>
                <Grid>
                  <Row>
                    <Col xs={6} md={4}>
                      <Image src={imgsrc} rounded />
                    </Col>
                    <Col xs={6} md={4}>
                      <Image src={imgsrc} circle />
                    </Col>
                    <Col xs={6} md={4}>
                      <Image src={imgsrc} thumbnail />
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
                title="Responsive"
                subtitle="Use the responsive attribute to scale image to the parent element."
              />

              <ComponentExample>
                <Image src={imgsrc} responsive />
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
                title="Image Props"
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
                				'img'
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
                				circle
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
                						Sets image shape as circle
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				responsive
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
                						Sets image as responsive image
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				rounded
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
                						Sets image shape as rounded
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				thumbnail
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
                						Sets image shape as thumbnail
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
