import React from "react";

import { Button, bootstrapUtils, Table, PageHeader, Grid, Row, Col } from "react-bootstrap";
import PropTable from "../../../components/PropTable/PropTable";
import ComponentHeader from "../../../components/ComponentHeader/ComponentHeader";
import ComponentExample from "../../../components/ComponentExample/ComponentExample";

// require("./.less");

export default class CustomStylesRoute extends React.Component {
  render() {


    return (
      <div className="body">

        <PageHeader>Custom Styles</PageHeader>

        <Grid>
          <Row>
            <Col>

              <ComponentHeader
                subtitle="The bsStyle prop, available in many components in React-Bootstrap, is used to map to a Bootstrap class for styling; for example, the Bootstrap class used for Button is `btn-${bsStyle}`. Use bootstrapUtils to create a custom class that is used in lieu of the classes provided by Bootstrap:"
              />

              <ComponentExample>
                <style type="text/css">{`
                  .btn-custom {
                      background-color: purple;
                      color: white;
                  }
                `}</style>
                <Button bsStyle="custom">Custom</Button>
              </ComponentExample>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
