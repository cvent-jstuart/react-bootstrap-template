import React from "react";
import NavItem from "./NavItem/NavItem";
import NavDropdown from "./NavDropdown/NavDropdown";

// require("./.less");

export default class NavBar extends React.Component {
  render() {
    const links = this.props.links;

    return (
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          {links.map((link, i) => {
            if (typeof link === "object" && link !== null) {
              return <NavDropdown title={Object.keys(link)} key={Object.keys(link)} keyVal={Object.keys(link)}>{link[Object.keys(link)]}</NavDropdown>
            } else if (link === "Separator"){
              return <li role="separator" class="divider"></li>
            } else if (link.indexOf('Header:') == 0){
              return <li class="dropdown-header">{link.split('Header:')[1]}</li>
            } else {
              return <NavItem to={link} key={link}>{link}</NavItem>
            }

          })}
        </ul>
      </div>
    )
  }
}
