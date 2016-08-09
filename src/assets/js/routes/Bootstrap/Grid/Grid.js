import React from "react";

import { Grid, Row, Col, Table, Clearfix, PageHeader } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class GridsRoute extends React.Component {
  render() {
    const style = {
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#eee",
      backgroundColor: "rgba(86,61,124,.15)",
      border: "1px solid #000",
      border: "1px solid rgba(0,0,0,1)"
    }

    const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

    return (
      <div className="body">

        <PageHeader>Grids</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader title="Basic Grid" />

              <ComponentExample>
                <Grid>
                  <Row className="show-grid" style={{ marginBottom: 15 }}>
                    <Col xs={12} md={8} style={style} ><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                    <Col xs={6} md={4} style={style} ><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                  </Row>

                  <Row className="show-grid" style={{ marginBottom: 15 }}>
                    <Col xs={6} md={4} style={style} ><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                    <Col xs={6} md={4} style={style} ><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                    <Col xsHidden md={4} style={style} ><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
                  </Row>

                  <Row className="show-grid" style={{ marginBottom: 15 }}>
                    <Col xs={6} xsOffset={6} style={style} ><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
                  </Row>

                  <Row className="show-grid">
                    <Col md={6} mdPush={6} style={style} ><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
                    <Col md={6} mdPull={6} style={style} ><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
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
                title="Clearfix"
                subtitle="Below, the columns won't clear correctly in viewport sm (768px ≤ width < 992px)."
              />

              <ComponentExample>
                <Grid>
                  <Row className="show-grid">
                    <Col sm={6} md={3} style={style} ><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
                    <Col sm={6} md={3} style={style} ><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>
                    <Col sm={6} md={3} style={style} ><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
                    <Col sm={6} md={3} style={style} ><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
                  </Row>
                </Grid>
              </ComponentExample>

              <ComponentHeader
                subtitle="Introduce Clearfix, set to visible for the viewports with issue, so that columns clear correctly."
              />

              <ComponentExample>
                <Grid>
                  <Row className="show-grid">
                    <Col sm={6} md={3} style={style} ><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
                    <Col sm={6} md={3} style={style} ><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>
                    <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
                    <Col sm={6} md={3} style={style} ><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
                    <Col sm={6} md={3} style={style} ><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
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
                title="Grid Props"
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
                				'container'
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
                						You can use a custom element for this component
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				fluid
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
                						Turn any fixed-width grid layout into a full-width layout by this property.
                					</p>
                					<p>
                						Adds
                						<code>
                							container-fluid
                						</code>
                						 class.
                					</p>
                				</div>
                			</td>
                		</tr>
                	</tbody>
                </Table>
              </PropTable>

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
                title="Row Props"
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
                				'row'
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
          <Row>
            <Col>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>

              <PropTable
                title="Col Props"
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
                				'col'
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
                		<tr>
                			<td>
                				lg
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
                				<div>
                					<p>
                						The number of columns you wish to span
                					</p>
                					<p>
                						for Large devices Desktops (&ge;1200px)
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-lg-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				lgHidden
                			</td>
                			<td>
                				<div>
                					boolean
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						Hide column
                					</p>
                					<p>
                						on Large devices Desktops
                					</p>
                					<p>
                						adds class
                						<code>
                							hidden-lg
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				lgOffset
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
                				<div>
                					<p>
                						Move columns to the right
                					</p>
                					<p>
                						for Large devices Desktops
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-lg-offset-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				lgPull
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
                				<div>
                					<p>
                						Change the order of grid columns to the left
                					</p>
                					<p>
                						for Large devices Desktops
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-lg-pull-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				lgPush
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
                				<div>
                					<p>
                						Change the order of grid columns to the right
                					</p>
                					<p>
                						for Large devices Desktops
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-lg-push-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				md
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
                				<div>
                					<p>
                						The number of columns you wish to span
                					</p>
                					<p>
                						for Medium devices Desktops (&ge;992px)
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-md-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				mdHidden
                			</td>
                			<td>
                				<div>
                					boolean
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						Hide column
                					</p>
                					<p>
                						on Medium devices Desktops
                					</p>
                					<p>
                						adds class
                						<code>
                							hidden-md
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				mdOffset
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
                				<div>
                					<p>
                						Move columns to the right
                					</p>
                					<p>
                						for Medium devices Desktops
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-md-offset-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				mdPull
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
                				<div>
                					<p>
                						Change the order of grid columns to the left
                					</p>
                					<p>
                						for Medium devices Desktops
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-md-pull-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				mdPush
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
                				<div>
                					<p>
                						Change the order of grid columns to the right
                					</p>
                					<p>
                						for Medium devices Desktops
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-md-push-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				sm
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
                				<div>
                					<p>
                						The number of columns you wish to span
                					</p>
                					<p>
                						for Small devices Tablets (&ge;768px)
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-sm-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				smHidden
                			</td>
                			<td>
                				<div>
                					boolean
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						Hide column
                					</p>
                					<p>
                						on Small devices Tablets
                					</p>
                					<p>
                						adds class
                						<code>
                							hidden-sm
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				smOffset
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
                				<div>
                					<p>
                						Move columns to the right
                					</p>
                					<p>
                						for Small devices Tablets
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-sm-offset-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				smPull
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
                				<div>
                					<p>
                						Change the order of grid columns to the left
                					</p>
                					<p>
                						for Small devices Tablets
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-sm-pull-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				smPush
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
                				<div>
                					<p>
                						Change the order of grid columns to the right
                					</p>
                					<p>
                						for Small devices Tablets
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-sm-push-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				xs
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
                				<div>
                					<p>
                						The number of columns you wish to span
                					</p>
                					<p>
                						for Extra small devices Phones (&lt;768px)
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-xs-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				xsHidden
                			</td>
                			<td>
                				<div>
                					boolean
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						Hide column
                					</p>
                					<p>
                						on Extra small devices Phones
                					</p>
                					<p>
                						adds class
                						<code>
                							hidden-xs
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				xsOffset
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
                				<div>
                					<p>
                						Move columns to the right
                					</p>
                					<p>
                						for Extra small devices Phones
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-xs-offset-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				xsPull
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
                				<div>
                					<p>
                						Change the order of grid columns to the left
                					</p>
                					<p>
                						for Extra small devices Phones
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-xs-pull-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				xsPush
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
                				<div>
                					<p>
                						Change the order of grid columns to the right
                					</p>
                					<p>
                						for Extra small devices Phones
                					</p>
                					<p>
                						class-prefix
                						<code>
                							col-xs-push-
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                	</tbody>
                </Table>
              </PropTable>

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
                title="Clearfix Props"
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
                				'clearfix'
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
                		<tr>
                			<td>
                				visibleLgBlock
                			</td>
                			<td>
                				<div>
                					boolean
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						Apply clearfix
                					</p>
                					<p>
                						on Large devices Desktops
                					</p>
                					<p>
                						adds class
                						<code>
                							visible-lg-block
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				visibleMdBlock
                			</td>
                			<td>
                				<div>
                					boolean
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						Apply clearfix
                					</p>
                					<p>
                						on Medium devices Desktops
                					</p>
                					<p>
                						adds class
                						<code>
                							visible-md-block
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				visibleSmBlock
                			</td>
                			<td>
                				<div>
                					boolean
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						Apply clearfix
                					</p>
                					<p>
                						on Small devices Tablets
                					</p>
                					<p>
                						adds class
                						<code>
                							visible-sm-block
                						</code>
                					</p>
                				</div>
                			</td>
                		</tr>
                		<tr>
                			<td>
                				visibleXsBlock
                			</td>
                			<td>
                				<div>
                					boolean
                				</div>
                			</td>
                			<td>
                				&nbsp;
                			</td>
                			<td>
                				<div>
                					<p>
                						Apply clearfix
                					</p>
                					<p>
                						on Extra small devices Phones
                					</p>
                					<p>
                						adds class
                						<code>
                							visible-xs-block
                						</code>
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
