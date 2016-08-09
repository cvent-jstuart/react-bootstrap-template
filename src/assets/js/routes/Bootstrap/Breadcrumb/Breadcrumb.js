import React from "react";

import { Breadcrumb, Table } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class NavBarsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <div class="page-header">
          <h3>Breadcrumbs</h3>
        </div>
        <div>

          <ComponentHeader
            title="Breadcrumbs Example"
            subtitle="Breadcrumbs are used to indicate the current page's location. Add active attribute to active Breadcrumb.Item.<br><br>Do not set both active and href attributes. active overrides href and span element is rendered instead of a."
          />

          <ComponentExample>
            <Breadcrumb>
              <Breadcrumb.Item href="#">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                Data
              </Breadcrumb.Item>
            </Breadcrumb>
          </ComponentExample>

        </div>
        <hr></hr>
        <div>

          <PropTable
            title="Breadcrumb.Item props"
            subtitle="Breadcrumb component itself doesn't have any specific public properties."
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
            				<div>
            					<p>
            						If set to true, renders
            						<code>
            							span
            						</code>
            						 instead of
            						<code>
            							a
            						</code>
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
            						<code>
            							href
            						</code>
            						 attribute for the inner
            						<code>
            							a
            						</code>
            						 element
            					</p>
            				</div>
            			</td>
            		</tr>
            		<tr>
            			<td>
            				target
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
            						<code>
            							target
            						</code>
            						 attribute for the inner
            						<code>
            							a
            						</code>
            						 element
            					</p>
            				</div>
            			</td>
            		</tr>
            		<tr>
            			<td>
            				title
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
            						<code>
            							title
            						</code>
            						 attribute for the inner
            						<code>
            							a
            						</code>
            						 element
            					</p>
            				</div>
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
