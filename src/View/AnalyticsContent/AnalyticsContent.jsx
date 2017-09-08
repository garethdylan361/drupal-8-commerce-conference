import React from 'react';
import {Line, Doughnut} from 'react-chartjs-2';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class AnalyticsContent extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const chartData = {
      labels: ["Conference 2011", "Conference 2012", "Conference 2013", "Conference 2014", "Conference 2015",
        "Conference 2016", "Conference 2017",],
      datasets: [
        {
          fill: false,
          pointHoverRadius: 5,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [200, 210, 190, 160, 180, 230, 221],
          spanGaps: false,
        }
      ]
    };

    const merchandiseReports = {
      labels: ["T-Shirts", "Drink Tickets", "Hats"],
      datasets: [
        {
          data: [50, 100, 20],
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
              <Row>
                <Col sm={12}>
                  <a href="#">Export</a>
                </Col>
              </Row>
            </Panel>

          </Col>

          <Row>

            <Col sm={6}>
              <Panel header="Seminar Reports" bsStyle="primary">
                <Row>
                  <Col sm={12}>
                    <Line style={{width: '100%', height:'200px'}} data={chartData}/>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <a href="#">Export</a>
                  </Col>
                </Row>
              </Panel>
            </Col>

            <Col sm={6}>
              <Panel header="Event Reports" bsStyle="primary">
                <Row>
                  <Col sm={12}>
                    <Line style={{width: '100%', height:'200px'}} data={chartData}/>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <a href="#">Export</a>
                  </Col>
                </Row>
              </Panel>
            </Col>

          </Row>

          <Row>

            <Col sm={6}>
              <Panel header="Day's Purchased Reports" bsStyle="primary">
                <Row>
                  <Col sm={12}>
                    <Line style={{width: '100%', height:'200px'}} data={chartData}/>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <a href="#">Export</a>
                  </Col>
                </Row>
              </Panel>
            </Col>

            <Col sm={6}>
              <Panel header="Day's Attending Reports" bsStyle="primary">
                <Row>
                  <Col sm={12}>
                    <Line style={{width: '100%', height:'200px'}} data={chartData}/>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <a href="#">Export</a>
                  </Col>
                </Row>
              </Panel>
            </Col>

          </Row>

          <Row>

            <Col sm={6}>
              <Panel header="Event Reports" bsStyle="primary">
                <Row>
                  <Col sm={12}>
                    <Line style={{width: '100%', height:'200px'}} data={chartData}/>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <a href="#">Export</a>
                  </Col>
                </Row>
              </Panel>
            </Col>

            <Col sm={6}>
              <Panel header="Conference Merchandise Sales Reports" bsStyle="primary">
                <Row>
                  <Col sm={12}>
                    <Doughnut style={{width: '100%', height:'200px'}} data={merchandiseReports}/>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <a href="#">Export</a>
                  </Col>
                </Row>
              </Panel>
            </Col>

          </Row>

        </Row>
      </Panel>
    );
  }
}

