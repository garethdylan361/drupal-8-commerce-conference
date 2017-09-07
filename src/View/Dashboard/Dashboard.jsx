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

          <Col sm={5} md={4} lg={3} xl={2}>
            <Row>
              <Col sm={12}>
                <ConferenceSideNav />
              </Col>
            </Row>
          </Col>

          <Col sm={7} md={8} lg={9} xl={10}>
            <Row>
              <Col sm={12}>
                <ConferenceNavBar />
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <AnalyticsContent />
              </Col>
            </Row>

          </Col>

        </Row>

      </content>
    );
  }

}

ReactDOM.render(<Dashboard/>, document.getElementById("conferenceReactApp"));
