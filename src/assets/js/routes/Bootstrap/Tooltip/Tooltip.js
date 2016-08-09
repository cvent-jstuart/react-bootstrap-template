import React from "react";

import { Tooltip, OverlayTrigger, ButtonToolbar, Button, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class TooltipsRoute extends React.Component {

  render() {
    const tooltip = (
      <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
    );

    return (
      <div className="body">

        <PageHeader>Tooltips</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                title=""
                subtitle="Tooltip component for a more stylish alternative to that anchor tag title attribute."
              />

              <ComponentExample>
                <Tooltip
                  placement="right"
                  className="in"
                  id="tooltip-right"
                  style={{ position: "relative", display: "inline-block", margin: "5px 10px", zIndex: 1 }}
                >
                  Tooltip right
                </Tooltip>
                <Tooltip
                  placement="top"
                  className="in"
                  id="tooltip-top"
                  style={{ position: "relative", display: "inline-block", margin: "5px 10px", zIndex: 1 }}
                >
                  Tooltip top
                </Tooltip>
                <Tooltip
                  placement="left"
                  className="in"
                  id="tooltip-left"
                  style={{ position: "relative", display: "inline-block", margin: "5px 10px", zIndex: 1 }}
                >
                  Tooltip left
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  className="in"
                  id="tooltip-bottom"
                  style={{ position: "relative", display: "inline-block", margin: "5px 10px", zIndex: 1 }}
                >
                  Tooltip bottom
                </Tooltip>
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

              <ComponentHeader title="With OverlayTrigger" />

              <ComponentExample>
                <ButtonToolbar>
                  <OverlayTrigger
                    placement="left"
                    overlay={tooltip}
                  >
                    <Button bsStyle="default">Left Placement</Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={tooltip}
                  >
                    <Button bsStyle="default">Top Placement</Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={tooltip}
                  >
                    <Button bsStyle="default">Bottom Placement</Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="right"
                    overlay={tooltip}
                  >
                    <Button bsStyle="default">Right Placement</Button>
                  </OverlayTrigger>
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

              <ComponentHeader title="Text with Inline Tooltips" />

              <ComponentExample>
                <p className="muted" style={{ marginBottom: 0 }}>
                  Tight pants next level keffiyeh <LinkWithTooltip tooltip="Default tooltip" href="#" id="tooltip-1">you probably</LinkWithTooltip> haven&apos;t heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney&apos;s fixie sustainable quinoa 8-bit american apparel <LinkWithTooltip tooltip={<span>Another <strong>tooltip</strong></span>} href="#" id="tooltip-2">have a</LinkWithTooltip> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweene&apos;s cleanse vegan chambray. A really ironic artisan <LinkWithTooltip tooltip="Another one here too" href="#" id="tooltip-3">whatever keytar</LinkWithTooltip>, scenester farm-to-table banksy Austin <LinkWithTooltip tooltip="The last tip!" href="#" id="tooltip-4">twitter handle</LinkWithTooltip> freegan cred raw denim single-origin coffee viral.
                </p>
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

              <PropTable title="OverlayTrigger Props">
                <div>
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
                  				animation
                  			</td>
                  			<td>
                  				<div>
                  					boolean | elementType
                  				</div>
                  			</td>
                  			<td>
                  				Fade
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						Use animation
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				defaultOverlayShown
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
                  						The initial visibility state of the Overlay. For more nuanced visibility control, consider using the Overlay component directly.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				delay
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
                  						A millisecond delay amount to show and hide the Overlay once triggered
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				delayHide
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
                  						A millisecond delay amount before hiding the Overlay once triggered.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				delayShow
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
                  						A millisecond delay amount before showing the Overlay once triggered.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onEnter
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
                  				<div>
                  					<p>
                  						Callback fired before the Overlay transitions in
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onEntered
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
                  				<div>
                  					<p>
                  						Callback fired after the Overlay finishes transitioning in
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onEntering
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
                  				<div>
                  					<p>
                  						Callback fired as the Overlay begins to transition in
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onExit
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
                  				<div>
                  					<p>
                  						Callback fired right before the Overlay transitions out
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onExited
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
                  				<div>
                  					<p>
                  						Callback fired after the Overlay finishes transitioning out
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onExiting
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
                  				<div>
                  					<p>
                  						Callback fired as the Overlay begins to transition out
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				overlay required
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
                  				<div>
                  					<p>
                  						An element or text to overlay next to the target.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				rootClose
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
                  						Specify whether the overlay should trigger onHide when the user clicks outside the overlay
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				trigger
                  			</td>
                  			<td>
                  				<div>
                  					triggerType | array&lt;triggerType&gt;
                  				</div>
                  			</td>
                  			<td>
                  				['hover', 'focus']
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						Specify which action or actions trigger Overlay visibility
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  	</tbody>
                  </Table>
                </div>
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

              <PropTable title="Tooltip Props">
                <div>
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
                  				arrowOffsetLeft
                  			</td>
                  			<td>
                  				<div>
                  					number | string
                  				</div>
                  			</td>
                  			<td>
                  				&nbsp;
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						The "left" position value for the Tooltip arrow.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				arrowOffsetTop
                  			</td>
                  			<td>
                  				<div>
                  					number | string
                  				</div>
                  			</td>
                  			<td>
                  				&nbsp;
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						The "top" position value for the Tooltip arrow.
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
                  				'tooltip'
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
                  				id required
                  			</td>
                  			<td>
                  				<div>
                  					string|number
                  				</div>
                  			</td>
                  			<td>
                  				&nbsp;
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						An html id attribute, necessary for accessibility
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				placement
                  			</td>
                  			<td>
                  				<div>
                  					one of:
                  					<code>
                  						'top'
                  					</code>
                  					,
                  					<code>
                  						'right'
                  					</code>
                  					,
                  					<code>
                  						'bottom'
                  					</code>
                  					,
                  					<code>
                  						'left'
                  					</code>
                  				</div>
                  			</td>
                  			<td>
                  				'right'
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						Sets the direction the Tooltip is positioned towards.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				positionLeft
                  			</td>
                  			<td>
                  				<div>
                  					number | string
                  				</div>
                  			</td>
                  			<td>
                  				&nbsp;
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						The "left" position value for the Tooltip.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				positionTop
                  			</td>
                  			<td>
                  				<div>
                  					number | string
                  				</div>
                  			</td>
                  			<td>
                  				&nbsp;
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						The "top" position value for the Tooltip.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  	</tbody>
                  </Table>
                </div>
              </PropTable>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const LinkWithTooltip = React.createClass({
  render() {
    let tooltip = <Tooltip id={this.props.id}>{this.props.tooltip}</Tooltip>;

    return (
      <OverlayTrigger
        overlay={tooltip} placement="top"
        delayShow={300} delayHide={150}
      >
        <a href={this.props.href}>{this.props.children}</a>
      </OverlayTrigger>
    );
  }
});
