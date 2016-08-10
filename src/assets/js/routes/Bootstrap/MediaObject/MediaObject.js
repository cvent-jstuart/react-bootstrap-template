import React from "react";

import { Media, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class MediaObjectsRoute extends React.Component {
  render() {
    const imgsrc = "http://megaicons.net/static/img/icons_sizes/43/431/64/madagascar-mort-icon.png";

    return (
      <div className="body">

        <PageHeader>Media Objects <small>Media, Media.Left, Media.Right, Media.Heading, Media.List, Media.ListItem</small></PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                subtitle="Abstract object styles for building various types of components (like blog comments, Tweets, etc) that feature a left or right aligned image alongside textual content."
              />

              <ComponentExample>
                <Media>
                   <Media.Left>
                      <img width={64} height={64} src={imgsrc} alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading>Media Heading</Media.Heading>
                      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Media.Body>
                  </Media>
                  <Media>
                    <Media.Left>
                      <img width={64} height={64} src={imgsrc} alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading>Media Heading</Media.Heading>
                      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                      <Media>
                        <Media.Left>
                          <img width={64} height={64} src={imgsrc} alt="Image"/>
                        </Media.Left>
                        <Media.Body>
                          <Media.Heading>Nested Media Heading</Media.Heading>
                          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </Media.Body>
                      </Media>
                    </Media.Body>
                  </Media>
                  <Media>
                    <Media.Body>
                      <Media.Heading>Media Heading</Media.Heading>
                      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Media.Body>
                    <Media.Right>
                      <img width={64} height={64} src={imgsrc} alt="Image"/>
                    </Media.Right>
                  </Media>
                  <Media>
                    <Media.Left>
                      <img width={64} height={64} src={imgsrc} alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading>Media Heading</Media.Heading>
                      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Media.Body>
                     <Media.Right>
                      <img width={64} height={64} src={imgsrc} alt="Image"/>
                    </Media.Right>
                  </Media>
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
                title="Media Alignment"
                subtitle="The images or other media can be aligned top, middle, or bottom. The default is top aligned."
              />

              <ComponentExample>
                <Media>
                  <Media.Left align="top">
                    <img width={64} height={64} src={imgsrc} alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Top aligned media</Media.Heading>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

                    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </Media.Body>
                </Media>
                <Media>
                  <Media.Left align="middle">
                    <img width={64} height={64} src={imgsrc} alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Middle aligned media</Media.Heading>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

                    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </Media.Body>
                </Media>
                <Media>
                  <Media.Left align="bottom">
                    <img width={64} height={64} src={imgsrc} alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Bottom aligned media</Media.Heading>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

                    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </Media.Body>
                </Media>
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
                title="Media List"
                subtitle="You can use media inside lists."
              />

              <ComponentExample>
                <Media.List>
                  <Media.ListItem>
                    <Media.Left>
                      <img width={64} height={64} src={imgsrc} alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading>Media heading</Media.Heading>
                      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>

                        <Media>
                          <Media.Left>
                            <img width={64} height={64} src={imgsrc} alt="Image"/>
                          </Media.Left>
                          <Media.Body>
                            <Media.Heading>Nested media heading</Media.Heading>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>

                            <Media>
                              <Media.Left>
                                <img width={64} height={64} src={imgsrc} alt="Image"/>
                              </Media.Left>
                              <Media.Body>
                                <Media.Heading>Nested media heading</Media.Heading>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                              </Media.Body>
                            </Media>
                          </Media.Body>
                        </Media>

                        <Media>
                          <Media.Left>
                            <img width={64} height={64} src={imgsrc} alt="Image"/>
                          </Media.Left>
                          <Media.Body>
                            <Media.Heading>Nested media heading</Media.Heading>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                          </Media.Body>
                        </Media>
                    </Media.Body>
                  </Media.ListItem>
                </Media.List>
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
                title="Media Props"
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
                				'media'
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
                				componentClass
                			</td>
                			<td>
                				<div>
                					elementType
                				</div>
                			</td>
                			<td>
                				'div'
                			</td>
                			<td>
                				<div>
                					<p>
                						You can use a custom element type for this component.
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
