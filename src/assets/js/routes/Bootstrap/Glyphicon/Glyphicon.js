import React from "react";

import { Glyphicon, Button, ButtonGroup, ButtonToolbar, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class GlyphiconsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <PageHeader>Glyphicons</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                subtitle="Use them in buttons, button groups for a toolbar, navigation, or prepen form inputs."
              />

              <ComponentExample>
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button><Glyphicon glyph="align-left" /></Button>
                    <Button><Glyphicon glyph="align-center" /></Button>
                    <Button><Glyphicon glyph="align-right" /></Button>
                    <Button><Glyphicon glyph="align-justify" /></Button>
                  </ButtonGroup>
                </ButtonToolbar>
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button bsSize="large"><Glyphicon glyph="star" /> Star</Button>
                    <Button><Glyphicon glyph="star" /> Star</Button>
                    <Button bsSize="small"><Glyphicon glyph="star" /> Star</Button>
                    <Button bsSize="xsmall"><Glyphicon glyph="star" /> Star</Button>
                  </ButtonGroup>
                </ButtonToolbar>
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
                title="Glyphicon Props"
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
                				'glyphicon'
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
                				glyph required
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
                				<div>
                					<p>
                						An icon name. See e.g.
                						<a href="http://getbootstrap.com/components/#glyphicons">
                							http://getbootstrap.com/components/#glyphicons
                						</a>
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
