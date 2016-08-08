import React from "react";

require("./styles/index.less");

export default class Alert extends React.Component {
  render() {
    return (
      <div className={
           'alert ' + (
             this.props.type ?
              'alert-' + this.props.type
              : '' )}
          role="alert"
          style={{textAlign: this.props.align}}>
        {( this.props.icon != false ?
            <span class={"glyphicon glyphicon-" + this.props.icon}>&nbsp;</span>
        : '' )}
        {this.props.children}
      </div>
    )
  }
}

Alert.propTypes = {
  type: React.PropTypes.string,
  align: React.PropTypes.string
};

Alert.defaultProps = {
  type: "success",
  align: "left",
  icon: false
};
