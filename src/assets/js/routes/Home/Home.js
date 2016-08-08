import React from "react";
import { connect } from "react-redux";

import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

require("./home.less");

class Home extends React.Component {
  render() {

    const { dispatch, user } = this.props;

    return (
      <div className="featured">
        <div className="featured-container">
          {/*<Header title={"Welcome " + this.props.users[0].name + "!"} />*/}
          <Body />
          {/* <Footer />*/}
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

export default connect(connectItems)(Home);
