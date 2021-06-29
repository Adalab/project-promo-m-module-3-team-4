import React from "react";
import "../../../stylesheets/layout/_collapsable.scss";
import "../../../stylesheets/layout/_form.scss";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const openClassName = this.state.isOpen ? "open" : "none";

    return (
      <>
        <div className="fieldset__button" onClick={this.handleClick}>
          <div className="fieldset__button--title">
            <i className={this.props.icon}></i>
            <h2>{this.props.title}</h2>
          </div>
          <i className="fas fa-chevron-down fa-chevron-up js-designButton"></i>
        </div>
        <div className="js-design">
          <div className={`design__expand ${openClassName}`}>
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}

export { Collapsable };
