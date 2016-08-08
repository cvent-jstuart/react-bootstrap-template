import React from "react";
import { connect } from "react-redux";

import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

require("./contact.less");

class Contact extends React.Component {
  render() {

    const { dispatch, user } = this.props;

    return (
      <div className="contact">
        <div className="contact-container">
          <Header title="Contact"/>
          <Body />
          <Footer />
        </div>
      </div>
    )
  }
}

const connectItems = (state) => {
  return {
    user: state.user
  }
};

export default connect(connectItems)(Contact);
