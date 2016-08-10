import React from "react";
import { Link } from "react-router";

import NavigationBranding from "./NavigationBranding/NavigationBranding";
import NavBar from "./NavBar/NavBar";

const links = [
  "Home",
  {
    "Buttons": [
      "Buttons",
      "ButtonGroups",
      "Dropdowns"
    ]
  },
  {
    "Overlays": [
      "Modals",
      "Tooltips",
      "Popovers"
    ]
  },
  {
    "Navigation": [
      "Navs",
      "Navbars",
      "Breadcrumbs",
      "Tabs",
      "Paginations",
      "Pagers"
    ]
  },
  {
    "Page Layout": [
      "Grids",
      "Jumbotrons",
      "PageHeaders",
      "ListGroups",
      "Tables",
      "Panels",
      "Wells"
    ]
  },
  {
    "Forms": [
      "Forms",
      "SupportedControls",
      "FormLayouts",
      "InputGroups"
    ]
  },
  {
    "Media Content": [
      "Thumbnails",
      "Labels",
      "Badges",
      "Alerts",
      "Progressbars",
      "Carousels"
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
            <NavigationBranding title="Bootstrap Template" />
            <NavBar links={links} /> {/*/.nav-collapse */}
          </div>
        </nav>
      </div>
    )
  }
}
