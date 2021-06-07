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
    console.log(this.state);
    const openClassName = this.state.isOpen ? "open" : "none";
    // const openText = this.state.isOpen ? "Abierto" : "Cerrado";
    return (
      <>
        <div className="fieldset__button">
          <div className="fieldset__button--title">
            <i className={this.props.icon}></i>
            <h2>{this.props.title}</h2>
          </div>
          <i
            className="fas fa-chevron-down fa-chevron-up js-designButton"
            onClick={this.handleClick}
          ></i>
        </div>
        <div className="js-design">
          <div className={`design__expand ${openClassName}`}></div>
        </div>
      </>
    );
  }
}

export { Collapsable };
