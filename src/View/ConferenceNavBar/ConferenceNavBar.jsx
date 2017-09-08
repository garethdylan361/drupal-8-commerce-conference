import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class ConferenceNavBar extends React.Component {

  constructor(props){
    super(props);
  }

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render(){

    return(
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="#">Analytics</NavItem>
        <NavItem eventKey="2" href="#">Manage</NavItem>
        <NavItem eventKey="3" href="#">Registration</NavItem>
        <NavItem eventKey="3" href="#">Name Tags</NavItem>
      </Nav>
    );
  }

}

