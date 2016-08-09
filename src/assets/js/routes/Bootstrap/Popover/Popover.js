import React from "react";

import { Tooltip, Popover, OverlayTrigger, ButtonToolbar, Button, Table } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class TooltipRoute extends React.Component {

  render() {
    const popoverLeft = (
      <Popover id="popover-positioned-left" title="Popover left">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );

    const popoverTop = (
      <Popover id="popover-positioned-top" title="Popover top">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );

    const popoverBottom = (
      <Popover id="popover-positioned-bottom" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );

    const popoverRight = (
      <Popover id="popover-positioned-right" title="Popover right">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );

    return (
      <div className="body">
        <div class="page-header">
          <h3>Popovers</h3>
        </div>
        <div>
          
          <ComponentHeader
            title=""
            subtitle="The Popover, offers a more robust alternative to the Tooltip for displaying overlays of content."
          />

          <ComponentExample>
            <Popover
              id="popover-basic"
              placement="right"
              positionLeft={0}
              positionTop={0}
              title="Popover right"
              style={{ position: "relative", display: "inline-block", zIndex: 1 }}
            >
              And here's some <strong>amazing</strong> content. It's very engaging. right?
            </Popover>
          </ComponentExample>
        </div>
        <hr></hr>
        <div>

          <ComponentHeader title="With OverlayTrigger onClick" />

          <ComponentExample>
            <ButtonToolbar>
              <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                <Button bsStyle="default">Left Click Placement</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                <Button bsStyle="default">Top Click Placement</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                <Button bsStyle="default">Bottom Click Placement</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="right" overlay={popoverTop}>
                <Button bsStyle="default">Right Click Placement</Button>
              </OverlayTrigger>
            </ButtonToolbar>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <ComponentHeader
            title="Trigger Behaviors"
            subtitle="It&apos;s inadvisable to use &quot;hover&quot; or &quot;focus&quot; triggers for popovers, because they have poor accessibility from keyboard and on mobile devices."
          />

          <ComponentExample>
            <ButtonToolbar>
              <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                <Button bsStyle="default">Click Trigger</Button>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={popoverTop}>
                <Button bsStyle="default">Hover + Focus Trigger</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverBottom}>
                <Button bsStyle="default">Focus Trigger</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" rootClose placement="right" overlay={popoverTop}>
                <Button bsStyle="default">Click + rootClose Trigger</Button>
              </OverlayTrigger>
            </ButtonToolbar>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <ComponentHeader title="Text with Inline Tooltips" />

          <ComponentExample>
            <p className="muted" style={{ marginBottom: 0 }}>
              Tight pants next level keffiyeh <LinkWithTooltip tooltip="Default tooltip" href="#" id="tooltip-1">you probably</LinkWithTooltip> haven&apos;t heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney&apos;s fixie sustainable quinoa 8-bit american apparel <LinkWithTooltip tooltip={<span>Another <strong>tooltip</strong></span>} href="#" id="tooltip-2">have a</LinkWithTooltip> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweene&apos;s cleanse vegan chambray. A really ironic artisan <LinkWithTooltip tooltip="Another one here too" href="#" id="tooltip-3">whatever keytar</LinkWithTooltip>, scenester farm-to-table banksy Austin <LinkWithTooltip tooltip="The last tip!" href="#" id="tooltip-4">twitter handle</LinkWithTooltip> freegan cred raw denim single-origin coffee viral.
            </p>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <ComponentHeader title="Popover component in container" />

          <ComponentExample>
            <p>
              ...
            </p>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <ComponentHeader title="Positioned popover components in scrolling container" />

          <ComponentExample>
            <p>
              ...
            </p>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

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

        </div>
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
