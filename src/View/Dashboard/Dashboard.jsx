class Dashboard extends React.Component {

  constructor(props){
    super(props);
  }

  handleSelect(eventKey) {
    event.preventDefault();
  }

  render(){

    let Row = ReactBootstrap.Row,
      Col = ReactBootstrap.Col;

    return(
      <content>
        <Row>

          <Col sm={3}>
            <Row>
              <Col sm={12}>
                <ConferenceSideNav />
              </Col>
            </Row>
          </Col>

          <Col sm={9}>
            <Row>
              <Col sm={12}>git
                <ConferenceNavBar />
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                Content
              </Col>
            </Row>

          </Col>

        </Row>

      </content>
    );
  }

}

ReactDOM.render(<Dashboard/>, document.getElementById("conferenceReactApp"));
