import React from "react";

import { Nav, NavItem, NavDropdown, MenuItem, Table } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class NavsRoute extends React.Component {
  render() {
    const handleSelect = (selectedKey) => {
      alert('selected ' + selectedKey);
    }

    return (
      <div className="body">

        <div class="page-header">
          <h3>Navs</h3>
        </div>
        <div>

          <ComponentHeader title="Pills" subtitle="Navs come in two styles, pills and tabs. Disable a tab by adding disabled." />

          <ComponentExample>
            <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
              <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
              <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
              <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            </Nav>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <ComponentHeader title="Tabs" />

          <ComponentExample>
            <Nav bsStyle="tabs" activeKey={1} onSelect={handleSelect}>
              <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
              <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
              <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            </Nav>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <ComponentHeader title="Dropdown" />

          <ComponentExample>
            <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
              <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
              <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
              <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
              <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                <MenuItem eventKey="4.1">Action</MenuItem>
                <MenuItem eventKey="4.2">Another action</MenuItem>
                <MenuItem eventKey="4.3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4.4">Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <ComponentHeader title="Stacked" />

          <ComponentExample>
            <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
              <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
              <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
              <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            </Nav>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <ComponentHeader title="Justified" />

          <ComponentExample>
            <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect}>
              <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
              <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
              <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            </Nav>
            <br />
            <Nav bsStyle="pills" justified activeKey={1} onSelect={this.handleSelect}>
              <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
              <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
              <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            </Nav>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <PropTable title="Nav props">
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
            				activeHref
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
            						Marks the child NavItem with a matching
            						<code>
            							href
            						</code>
            						 prop as active.
            					</p>
            				</div>
            			</td>
            		</tr>
            		<tr>
            			<td>
            				activeKey
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
            						Marks the NavItem with a matching
            						<code>
            							eventKey
            						</code>
            						 as active. Has a higher precedence over
            						<code>
            							activeHref
            						</code>
            						.
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
            				'nav'
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
            				bsStyle
            			</td>
            			<td>
            				<div>
            					one of:
            					<code>
            						"tabs"
            					</code>
            					,
            					<code>
            						"pills"
            					</code>
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
            				justified
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
            				&nbsp;
            			</td>
            		</tr>
            		<tr>
            			<td>
            				navbar
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
            						Apply styling an alignment for use in a Navbar. This prop will be set automatically when the Nav is used inside a Navbar.
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
            						A callback fired when a NavItem is selected.
            					</p>
            					<pre>
            						<code>
            							function ( Any eventKey, SyntheticEvent event?)
            						</code>
            					</pre>
            				</div>
            			</td>
            		</tr>
            		<tr>
            			<td>
            				pullLeft
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
            						Float the Nav to the left. When
            						<code>
            							navbar
            						</code>
            						 is
            						<code>
            							true
            						</code>
            						 the appropriate contextual classes are added as well.
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
            				false
            			</td>
            			<td>
            				<div>
            					<p>
            						Float the Nav to the right. When
            						<code>
            							navbar
            						</code>
            						 is
            						<code>
            							true
            						</code>
            						 the appropriate contextual classes are added as well.
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
            						ARIA role for the Nav, in the context of a TabContainer, the default will be set to "tablist", but can be overridden by the Nav when set explicitly.
            					</p>
            					<p>
            						When the role is set to "tablist" NavItem focus is managed according to the ARIA authoring practices for tabs:
            						<a href="https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel">
            							https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
            						</a>
            					</p>
            				</div>
            			</td>
            		</tr>
            		<tr>
            			<td>
            				stacked
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
            						NavItems are be positioned vertically.
            					</p>
            				</div>
            			</td>
            		</tr>
            	</tbody>
            </Table>
          </PropTable>

        </div>
        <hr></hr>
        <div>

          <PropTable title="NavItem props">
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
            				false
            			</td>
            			<td>
            				&nbsp;
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
            				&nbsp;
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
            				&nbsp;
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
            				&nbsp;
            			</td>
            		</tr>
            	</tbody>
            </Table>
          </PropTable>

        </div>
      </div>
    )
  }
}
