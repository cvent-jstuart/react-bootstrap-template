import React from "react";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const links = [
  "Home",
  {
    "Buttons": [
      "Buttons",
      "Button Groups",
      "Dropdowns"
    ]
  },
  {
    "Overlays": [
      "Modals",
      "Popovers",
      "Tooltips"

    ]
  },
  {
    "Navigation": [
      "Breadcrumbs",
      "Navs",
      "Navbars",
      "Pagers",
      "Paginations",
      "Tabs"
    ]
  },
  {
    "Page Layout": [
      "Grids",
      "Jumbotrons",
      "List Groups",
      "Page Headers",
      "Panels",
      "Tables",
      "Wells"
    ]
  },
  {
    "Forms": [
      "Forms",
      "Form Layouts",
      "Input Groups",
      "Supported Controls",
      "Validation States"
    ]
  },
  {
    "Media Content": [
      "Carousels",
      "Images",
      "Media Objects",
      "Responsive Embeds",
      "Thumbnails"
    ]
  },
  {
    "Miscellaneous": [
      "Alerts",
      "Badges",
      "Glyphicons",
      "Labels",
      "Progressbars",
      "Divider",
      "Header:Utilities",
      "Custom Styles",
      "Transitions"
    ]
  }
]

require("./navigation.less");

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      "selectedNavKey": null
    };
    this.onNavSelect = this.onNavSelect.bind(this);
  }

  onNavSelect(selectedKey) {
    this.setState({ selectedNavKey: selectedKey })
  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/index.html">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav activeKey={ this.state.selectedNavKey } onSelect={ this.onNavSelect } >
            {
              links.map((link, i) => {
                if (typeof link === "object" && link !== null) {
                  let linkKey = Object.keys(link);

                  return  <NavDropdown
                            title={ linkKey }
                            eventKey={ linkKey }
                            id={ linkKey }
                          >
                            {
                              link[linkKey].map((inner, i) => {
                                let innerLinkKey = link[linkKey][i];
                                let menuCode = innerLinkKey.replace(/ /g, "");

                                if (innerLinkKey === "Divider") {
                                  return  <MenuItem divider />
                                } else if (innerLinkKey.indexOf("Header:") == 0) {
                                  return  <MenuItem header >
                                            { innerLinkKey.split("Header:")[1] }
                                          </MenuItem>
                                } else {
                                  return  <LinkContainer to={menuCode}>
                                            <MenuItem
                                              eventKey={ menuCode }
                                            >
                                              { innerLinkKey }
                                            </MenuItem>
                                          </LinkContainer>
                                }
                              })
                            }
                          </NavDropdown>
                } else {
                  let menuCode = link.replace(/ /g, "");

                  return  <LinkContainer to={menuCode} >
                            <NavItem
                              eventKey={ menuCode }
                            >
                              { link }
                            </NavItem>
                          </LinkContainer>
                }
              })
            }
          </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}
