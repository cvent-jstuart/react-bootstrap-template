import React from "react";
import { Link } from "react-router";

import NavItem from "../NavItem/NavItem";

// require("./.less");

export default class NavDropdown extends React.Component {
  render() {
    const links = this.props.children;
    return (
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.title}<span class="caret"></span></a>
        <ul class="dropdown-menu">
          {links.map((link, i) => {
            if (typeof link === "object" && link !== null) {
              return <NavDropdown title={Object.keys(link)}>{link[Object.keys(link)]}</NavDropdown>
            } else if (link === "Separator"){
              return <li role="separator" class="divider"></li>
            } else if (link.indexOf('Header:') == 0){
              return <li class="dropdown-header">{link.split('Header:')[1]}</li>
            } else {
              return <NavItem to={link} key={link}>{link}</NavItem>
            }
          })}
        </ul>
      </li>
    )
  }
}
