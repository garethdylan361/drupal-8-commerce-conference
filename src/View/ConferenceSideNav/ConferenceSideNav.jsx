class ConferenceSideNav extends React.Component {

  constructor(props){
    super(props);
  }

  handleSelect(selectedKey) {
    event.preventDefault();
  }

  render(){

    let Nav = ReactBootstrap.Nav,
      NavItem = ReactBootstrap.NavItem;

    return(
      <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
        <NavItem eventKey={1}>Conference 2017</NavItem>
        <NavItem eventKey={1}>Conference 2016</NavItem>
        <NavItem eventKey={1}>Conference 2015</NavItem>
        <NavItem eventKey={1}>Conference 2014</NavItem>
        <NavItem eventKey={1}>Conference 2013</NavItem>
        <NavItem eventKey={1}>Conference 2012</NavItem>
        <NavItem eventKey={1}>Conference 2011</NavItem>
      </Nav>
    );
  }
}
