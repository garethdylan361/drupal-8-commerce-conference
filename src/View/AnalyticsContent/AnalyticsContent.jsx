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
      <Panel header="Conference Registrations">
        <Row>
          <Col sm={12}>
            <Line style={{width: '100%', height:'300px'}} data={chartData}/>
          </Col>
        </Row>
      </Panel>
    );
  }
}

