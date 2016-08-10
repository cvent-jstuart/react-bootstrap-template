import React from "react";

import { ResponsiveEmbed, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class ResponseiveEmbedsRoute extends React.Component {
  render() {
    const embedsrc = "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4";

    return (
      <div className="body">

        <PageHeader>Responsive Embeds</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                subtitle={["Allow browsers to determine video or slideshow dimensions based on the width of their containing block by creating an intrinsic ratio that will properly scale on any device.","You don't need to include frameborder=\"0\" in your iframes.","Either 16by9 or 4by3 aspect ratio via a16by9 or a4by3 attribute must be set."]}
              />

              <ComponentExample>
                <ResponsiveEmbed a16by9>
                  <video controls>
                      <source src={embedsrc} type="video/mp4" />
                  </video>
                </ResponsiveEmbed>
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
                title="Responsive Embed Props"
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
                				a16by9
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
                						16by9 aspect ratio
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				a4by3
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
                						4by3 aspect ratio
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
                				'embed-responsive'
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
                				children required
                			</td>
                			<td>
                				<div>
                					element
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						This component requires a single child element
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
