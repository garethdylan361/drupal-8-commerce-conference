class ConferenceNavBar extends React.Component {

  constructor(props){
    super(props);
  }

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render(){

    let Nav = ReactBootstrap.Nav,
      NavItem = ReactBootstrap.NavItem;

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

