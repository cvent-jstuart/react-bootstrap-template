import React from "react";

import { DropdownButton, SplitButton, MenuItem, Table, Dropdown, ButtonToolbar, Clearfix, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class DropdownsRoute extends React.Component {
  render() {
    const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];

    return (
      <div className="body">

        <PageHeader>Dropdowns</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader title="Single button dropdowns" />

              <ComponentExample>
                <ButtonToolbar>
                  {BUTTONS.map((title, i) => {
                    return (
                      <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3" active>Active Item</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                      </DropdownButton>
                    )
                  })}
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

              <ComponentHeader title="Split button dropdowns" />

              <ComponentExample>
                <ButtonToolbar>
                  {BUTTONS.map((title, i) => {
                    return (
                      <SplitButton bsStyle={title.toLowerCase()} title={title} key={i} id={`split-button-basic-${i}`}>
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                      </SplitButton>
                    )
                  })}
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

              <ComponentHeader title="bsSize prop - large, none, small, xsmall" />

              <ComponentExample>
                <ButtonToolbar style={{ marginBottom: 10 }} >
                  <DropdownButton bsSize="large" title="Large button" id="dropdown-size-large">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </DropdownButton>
                </ButtonToolbar>

                <ButtonToolbar style={{ marginBottom: 10 }} >
                  <DropdownButton title="Default button" id="dropdown-size-medium">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </DropdownButton>
                </ButtonToolbar>

                <ButtonToolbar style={{ marginBottom: 10 }} >
                  <DropdownButton bsSize="small" title="Small button" id="dropdown-size-small">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </DropdownButton>
                </ButtonToolbar>

                <ButtonToolbar>
                  <DropdownButton bsSize="xsmall" title="Extra small button" id="dropdown-size-extra-small">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </DropdownButton>
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

              <ComponentHeader title="noCaret prop" />

              <ComponentExample>
                <ButtonToolbar>
                  <DropdownButton bsStyle="default" title="No caret" noCaret id="dropdown-no-caret">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </DropdownButton>
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

              <ComponentHeader title="dropup prop" />

              <ComponentExample>
                <ButtonToolbar style={{ marginBottom: 10 }} >
                  <SplitButton title="Dropup" dropup id="split-button-dropup">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </SplitButton>
                </ButtonToolbar>

                <ButtonToolbar>
                  <SplitButton bsStyle="primary" title="Right dropup" dropup pullRight id="split-button-dropup-pull-right">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </SplitButton>
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

              <ComponentHeader title="pullRight prop" />

              <ComponentExample>
                <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </SplitButton>
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

              <ComponentHeader title="Menu items" />

              <ComponentExample>
                <Clearfix>
                  <ul className="dropdown-menu open" style={{display: "block", position: "static"}}>
                    <MenuItem header>Header</MenuItem>
                    <MenuItem>link</MenuItem>
                    <MenuItem divider/>
                    <MenuItem header>Header</MenuItem>
                    <MenuItem>link</MenuItem>
                    <MenuItem disabled>disabled</MenuItem>
                    <MenuItem title="See? I have a title.">
                      link with title
                    </MenuItem>
                    <MenuItem eventKey={1} href="#" onSelect={(eventKey) => {alert(`Alert from menu item.\neventKey: ${eventKey}`)}}>
                      link that alerts
                    </MenuItem>
                  </ul>
                </Clearfix>
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

              <PropTable title="DropdownButton Props">
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
                  				bsSize
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
                  						Component size variations.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				bsStyle
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
                  						Component visual or contextual style variants.
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
                  				ButtonGroup
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
                  				disabled
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
                  						Whether or not component is disabled.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				dropup
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
                  						The menu will open above the dropdown button, instead of below it.
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
                  						An html id attribute, necessary for assistive technologies, such as screen readers.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				noCaret
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
                  				&nbsp;
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onClose
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
                  						A callback fired when the Dropdown closes.
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
                  				<div>
                  					<p>
                  						A callback fired when a menu item is selected.
                  					</p>
                  					<pre>
                  						<code>
                  							(eventKey: any, event: Object) =&gt; any
                  						</code>
                  					</pre>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onToggle
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
                  					<small>
                  						<em>
                  							 controls
                  							<code>
                  								open
                  							</code>
                  						</em>
                  					</small>
                  				</div>
                  				<div>
                  					<p>
                  						A callback fired when the Dropdown wishes to change visibility. Called with the requested
                  						<code>
                  							open
                  						</code>
                  						 value.
                  					</p>
                  					<pre>
                  						<code>
                  							function(Boolean isOpen) {}
                  						</code>
                  					</pre>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				open
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
                  					<small>
                  						<em>
                  							 controlled by:
                  							<code>
                  								onToggle
                  							</code>
                  							, initial prop:
                  							<code>
                  								defaultOpen
                  							</code>
                  						</em>
                  					</small>
                  				</div>
                  				<div>
                  					<p>
                  						Whether or not the Dropdown is visible.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				pullRight
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
                  						Align the menu to the right side of the Dropdown toggle
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				role
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
                  						If
                  						<code>
                  							'menuitem'
                  						</code>
                  						, causes the dropdown to behave like a menu item rather than a menu button.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				title required
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
                  				&nbsp;
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

              <PropTable title="SplitButton Props">
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
                  				bsSize
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
                  						Component size variations.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				bsStyle
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
                  						Component visual or contextual style variants.
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
                  				ButtonGroup
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
                  				disabled
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
                  						Whether or not component is disabled.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				dropup
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
                  						The menu will open above the dropdown button, instead of below it.
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
                  						An html id attribute, necessary for assistive technologies, such as screen readers.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onClick
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
                  				onClose
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
                  						A callback fired when the Dropdown closes.
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
                  				<div>
                  					<p>
                  						A callback fired when a menu item is selected.
                  					</p>
                  					<pre>
                  						<code>
                  							(eventKey: any, event: Object) =&gt; any
                  						</code>
                  					</pre>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onToggle
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
                  					<small>
                  						<em>
                  							&nbsp;controls
                  							<code>
                  								open
                  							</code>
                  						</em>
                  					</small>
                  				</div>
                  				<div>
                  					<p>
                  						A callback fired when the Dropdown wishes to change visibility. Called with the requested
                  						<code>
                  							open
                  						</code>
                  						 value.
                  					</p>
                  					<pre>
                  						<code>
                  							function(Boolean isOpen) {}
                  						</code>
                  					</pre>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				open
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
                  					<small>
                  						<em>
                  							&nbsp;controlled by:
                  							<code>
                  								onToggle
                  							</code>
                  							, initial prop:
                  							<code>
                  								defaultOpen
                  							</code>
                  						</em>
                  					</small>
                  				</div>
                  				<div>
                  					<p>
                  						Whether or not the Dropdown is visible.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				pullRight
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
                  						Align the menu to the right side of the Dropdown toggle
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				role
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
                  						If
                  						<code>
                  							'menuitem'
                  						</code>
                  						, causes the dropdown to behave like a menu item rather than a menu button.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				title required
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
                  						The content of the split button.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				toggleLabel
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
                  						Accessible label for the toggle; the value of
                  						<code>
                  							title
                  						</code>
                  						 if not specified.
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

              <PropTable title="Dropdown Props">
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
                  				children
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
                  						The children of a Dropdown may be a
                  						<code>
                  							&lt;Dropdown.Toggle&gt;
                  						</code>
                  						 or a
                  						<code>
                  							&lt;Dropdown.Menu&gt;
                  						</code>
                  						.
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
                  				ButtonGroup
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
                  				disabled
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
                  						Whether or not component is disabled.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				dropup
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
                  						The menu will open above the dropdown button, instead of below it.
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
                  						An html id attribute, necessary for assistive technologies, such as screen readers.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onClose
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
                  						A callback fired when the Dropdown closes.
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
                  				<div>
                  					<p>
                  						A callback fired when a menu item is selected.
                  					</p>
                  					<pre>
                  						<code>
                  							(eventKey: any, event: Object) =&gt; any
                  						</code>
                  					</pre>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onToggle
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
                  					<small>
                  						<em>
                  							&nbsp;controls
                  							<code>
                  								open
                  							</code>
                  						</em>
                  					</small>
                  				</div>
                  				<div>
                  					<p>
                  						A callback fired when the Dropdown wishes to change visibility. Called with the requested
                  						<code>
                  							open
                  						</code>
                  						 value.
                  					</p>
                  					<pre>
                  						<code>
                  							function(Boolean isOpen) {}
                  						</code>
                  					</pre>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				open
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
                  					<small>
                  						<em>
                  							&nbsp;controlled by:
                  							<code>
                  								onToggle
                  							</code>
                  							, initial prop:
                  							<code>
                  								defaultOpen
                  							</code>
                  						</em>
                  					</small>
                  				</div>
                  				<div>
                  					<p>
                  						Whether or not the Dropdown is visible.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				pullRight
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
                  						Align the menu to the right side of the Dropdown toggle
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				role
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
                  						If
                  						<code>
                  							'menuitem'
                  						</code>
                  						, causes the dropdown to behave like a menu item rather than a menu button.
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

              <PropTable title="MenuItem Props">
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
                  				active
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
                  						Highlight the menu item as active.
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
                  				'dropdown'
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
                  				disabled
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
                  						Disable the menu item, making it unselectable.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				divider
                  			</td>
                  			<td>
                  				<div>
                  					all
                  				</div>
                  			</td>
                  			<td>
                  				false
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						Styles the menu item as a horizontal rule, providing visual separation between groups of menu items.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				eventKey
                  			</td>
                  			<td>
                  				<div>
                  					any
                  				</div>
                  			</td>
                  			<td>
                  				&nbsp;
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						Value passed to the
                  						<code>
                  							onSelect
                  						</code>
                  						 handler, useful for identifying the selected menu item.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				header
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
                  						Styles the menu item as a header label, useful for describing a group of menu items.
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
                  				<div>
                  					<p>
                  						HTML
                  						<code>
                  							href
                  						</code>
                  						 attribute corresponding to
                  						<code>
                  							a.href
                  						</code>
                  						.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onClick
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
                  						Callback fired when the menu item is clicked.
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
                  				<div>
                  					<p>
                  						Callback fired when the menu item is selected.
                  					</p>
                  					<pre>
                  						<code>
                  							(eventKey: any, event: Object) =&gt; any
                  						</code>
                  					</pre>
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
