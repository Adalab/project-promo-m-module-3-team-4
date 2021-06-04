import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  this.handleClick=this.handleClick.bind(this)
 
  handleClick (){
      this.setState({
          isOpen:!this.state.isOpen;

      })
  }
  render(){
    console.log(this.state)
    const open =this.state.isOpen?'open':'none';
    
    return(
          
      )
  }
}

export {Collapsable}