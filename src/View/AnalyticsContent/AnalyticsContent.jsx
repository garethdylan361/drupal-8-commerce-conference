class AnalyticsContent extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    let Line = window['react-chartjs'].Line,
      Panel = ReactBootstrap.Panel,
      Col = ReactBootstrap.Col,
      Row = ReactBootstrap.Row;

    const chartData = {
      labels: ["Conference 2011", "Conference 2012", "Conference 2013", "Conference 2014", "Conference 2015",
        "Conference 2016", "Conference 2017",],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          pointHoverRadius: 5,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [200, 210, 190, 160, 180, 230, 221],
          spanGaps: false,
        }
      ]
    };

    return (
      <Panel header="Conference Reports">
        <Row>
          <Col sm={12}>

            <Panel header="All Conference Reports" bsStyle="primary">
              <Row>
                <Col sm={12}>
                  <Line style={{width: '100%', height:'300px'}} data={chartData}/>
                </Col>
              </Row>
            </Panel>

          </Col>

          <Row>

            <Col sm={6}>
              <Panel header="Seminar Reports" bsStyle="primary">
                <Line style={{width: '100%', height:'200px'}} data={chartData}/>
              </Panel>
            </Col>

            <Col sm={6}>
              <Panel header="Event Reports" bsStyle="primary">
                <Line style={{width: '100%', height:'200px'}} data={chartData}/>
              </Panel>
            </Col>

          </Row>

          <Row>

            <Col sm={6}>
              <Panel header="Day's Purchased Reports" bsStyle="primary">
                <Line style={{width: '100%', height:'200px'}} data={chartData}/>
              </Panel>
            </Col>

            <Col sm={6}>
              <Panel header="Day's Attending Reports" bsStyle="primary">
                <Line style={{width: '100%', height:'200px'}} data={chartData}/>
              </Panel>
            </Col>

          </Row>

          <Row>

            <Col sm={6}>
              <Panel header="Event Reports" bsStyle="primary">
                <Line style={{width: '100%', height:'200px'}} data={chartData}/>
              </Panel>
            </Col>

          </Row>

        </Row>
      </Panel>
    );
  }
}

