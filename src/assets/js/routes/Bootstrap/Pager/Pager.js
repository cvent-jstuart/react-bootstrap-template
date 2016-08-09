import React from "react";

import { Pager, Table } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class NavBarsRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: 1
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h3>Pagers</h3>
        </div>
        <div>

          <ComponentHeader title="Centers by default" />

          <ComponentExample>
            <Pager>
              <Pager.Item href="#">Previous</Pager.Item>
              {' '}
              <Pager.Item href="#">Next</Pager.Item>
            </Pager>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <ComponentHeader
            title="Aligned"
            subtitle="Set the previous or next prop to true, to align left or right."
          />

          <ComponentExample>
            <Pager>
              <Pager.Item previous href="#">&larr; Previous Page</Pager.Item>
              <Pager.Item next href="#">Next Page &rarr;</Pager.Item>
            </Pager>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <ComponentHeader
            title="Disabled"
            subtitle="Set the disabled prop to true to disable the link."
          />

          <ComponentExample>
            <Pager>
              <Pager.Item previous href="#">&larr; Previous</Pager.Item>
              <Pager.Item disabled next href="#">Next &rarr;</Pager.Item>
            </Pager>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <PropTable title="Pagination props" subtitle="There are no public props for the Pager.Item component.">
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
            				'pager'
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
            	</tbody>
            </Table>
          </PropTable>

        </div>
      </div>
    )
  }
}
