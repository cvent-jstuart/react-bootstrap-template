import React from "react";
import { Link } from "react-router";

import NavigationBranding from "./NavigationBranding/NavigationBranding";
import NavBar from "./NavBar/NavBar";

const links = [
  "Home",
  {
  "Components":
    [
      "Buttons",
      "ButtonGroups",
      "Dropdowns",
      "Modals",
      "Tables",
      "Thumbnails",
      "Labels",
      "Badges",
      "Navs",
      "Navbars",
      "Alerts",
      "Progressbars",
      "Listgroups",
      "Panels",
      "Wells",
      "Carousel",
      "Jumbotron",
    ]
  }
]

require("./navigation.less");

export default class Navigation extends React.Component {
  render() {
    return (
      <div class="navigation-container">
        {/* Fixed navbar */}
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <NavigationBranding title="React Router Bootstrap Template" />
            <NavBar links={links} /> {/*/.nav-collapse */}
          </div>
        </nav>
      </div>
    )
  }
}
