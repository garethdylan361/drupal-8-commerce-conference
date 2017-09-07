class Dashboard extends React.Component {

  constructor(props){
    super(props);
  }

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render(){
    return(
      <ConferenceNavBar />
    );
  }

}

ReactDOM.render(<Dashboard/>, document.getElementById("conferenceReactApp"));
