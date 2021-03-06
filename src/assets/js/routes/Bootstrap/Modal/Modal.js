import React from "react";

import { Modal, Table, Button, PageHeader, Grid, Row, Col } from "react-bootstrap";
import ModalByButton from "./ModalByButton"
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class ModalsRoute extends React.Component {
  render() {
    return (
      <div className="body">

        <PageHeader>Modals</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader title="Basic Modal" />

              <ComponentExample>
                <div className="static-modal">
                  <Modal.Dialog style={{position: "static"}}>
                    <Modal.Header>
                      <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      One fine body...
                    </Modal.Body>

                    <Modal.Footer>
                      <Button>Close</Button>
                      <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>

                  </Modal.Dialog>
                </div>
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

              <ComponentHeader title="Modal Launch Examples" />

              <ComponentExample>
                <div>
                  <ModalByButton buttonTitle="Launch Modal"/>
                </div>
                <div style={{ marginTop: 10 }}>
                  <ModalByButton buttonTitle="Launch Small Modal" bsSize="small"/>
                </div>
                <div style={{ marginTop: 10 }}>
                  <ModalByButton buttonTitle="Launch Large Modal" bsSize="large"/>
                </div>
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

              <PropTable title="Modal Props">
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
                  					boolean
                  				</div>
                  			</td>
                  			<td>
                  				true
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						Open and close the Modal with a slide and fade animation.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				autoFocus
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
                  						When
                  						<code>
                  							true
                  						</code>
                  						 The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				backdrop
                  			</td>
                  			<td>
                  				<div>
                  					one of:
                  					<code>
                  						'static'
                  					</code>
                  					,
                  					<code>
                  						true
                  					</code>
                  					,
                  					<code>
                  						false
                  					</code>
                  				</div>
                  			</td>
                  			<td>
                  				&nbsp;
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						Include a backdrop component. Specify 'static' for a backdrop that doesnt trigger an "onHide" when clicked.
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
                  				'modal'
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
                  				bsSize
                  			</td>
                  			<td>
                  				<div>
                  					one of:
                  					<code>
                  						"lg"
                  					</code>
                  					,
                  					<code>
                  						"large"
                  					</code>
                  					,
                  					<code>
                  						"sm"
                  					</code>
                  					,
                  					<code>
                  						"small"
                  					</code>
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
                  				dialogClassName
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
                  						A css class to apply to the Modal dialog DOM node.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				dialogComponentClass
                  			</td>
                  			<td>
                  				<div>
                  					elementType
                  				</div>
                  			</td>
                  			<td>
                  				ModalDialog
                  			</td>
                  			<td>
                  				<div>
                  					<p>
                  						A Component type that provides the modal content Markup. This is a useful prop when you want to use your own styles and markup to create a custom modal component.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				enforceFocus
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
                  						When
                  						<code>
                  							true
                  						</code>
                  						 The modal will prevent focus from leaving the Modal while open. Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies, such as screen readers.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				keyboard
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
                  						Close the modal when escape key is pressed
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
                  						Callback fired before the Modal transitions in
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
                  						Callback fired after the Modal finishes transitioning in
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
                  						Callback fired as the Modal begins to transition in
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
                  						Callback fired right before the Modal transitions out
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
                  						Callback fired after the Modal finishes transitioning out
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
                  						Callback fired as the Modal begins to transition out
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				onHide
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
                  						A callback fired when the header closeButton or non-static backdrop is clicked. Required if either are specified.
                  					</p>
                  				</div>
                  			</td>
                  		</tr>
                  		<tr>
                  			<td>
                  				show
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
                  						When
                  						<code>
                  							true
                  						</code>
                  						 The modal will show itself.
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

              <PropTable title="Modal.Header Props">
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
                          aria-label
                        </td>
                        <td>
                          <div>
                            string
                          </div>
                        </td>
                        <td>
                          'Close'
                        </td>
                        <td>
                          <div>
                            <p>
                              The 'aria-label' attribute provides an accessible label for the close button. It is used for Assistive Technology when the label text is not readable.
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
                          'modal-header'
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
                          closeButton
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
                              Specify whether the Component should contain a close button
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          onHide
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
                              A Callback fired when the close button is clicked. If used directly inside a Modal component, the onHide will automatically be propagated up to the parent Modal
                              <code>
                                onHide
                              </code>
                              .
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

              <PropTable title="Modal.Title Props">
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
                  				bsClass
                  			</td>
                  			<td>
                  				<div>
                  					string
                  				</div>
                  			</td>
                  			<td>
                  				'modal-title'
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

              <PropTable title="Modal.Body Props">
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
                  				bsClass
                  			</td>
                  			<td>
                  				<div>
                  					string
                  				</div>
                  			</td>
                  			<td>
                  				'modal-body'
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

              <PropTable title="Modal.Footer Props">
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
                  				bsClass
                  			</td>
                  			<td>
                  				<div>
                  					string
                  				</div>
                  			</td>
                  			<td>
                  				'modal-footer'
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
