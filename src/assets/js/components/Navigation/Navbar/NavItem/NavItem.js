import React from "react";
import { Link, IndexLink, withRouter } from "react-router";

// require("./.less");

class NavItem extends React.Component {
  render () {
    const { router } = this.props
    const { index, to, children, ...props } = this.props

    let isActive
    if( router.isActive('/',true) && index ) isActive = true
    else  isActive = router.isActive(to)
    const LinkComponent = index ?  IndexLink : Link

    return (
      <li className={isActive ? 'active' : ''} key={this.props.keyVal}>
        <LinkComponent to={to}>{children}</LinkComponent>
      </li>
    )
  }
}

NavItem = withRouter(NavItem)

export default NavItem
