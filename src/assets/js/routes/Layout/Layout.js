import React from "react";
import { connect } from "react-redux";

import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

require("./layout.less");

class Layout extends React.Component {
  render() {

    const { dispatch, user } = this.props;
    return (
      <div className="layout">
        <Navigation />
        <div className="layout-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

const connectItems = (state) => {
  return {
    users: state.b.users
  }
};

export default connect(connectItems)(Layout);
