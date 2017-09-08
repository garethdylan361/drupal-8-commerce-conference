import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ConferenceNavBar from '../../View/ConferenceNavBar/ConferenceNavBar';
import ConferenceSideNav from '../../View/ConferenceSideNav/ConferenceSideNav';
import AnalyticsContent from '../../View/AnalyticsContent/AnalyticsContent';

export default class Dashboard extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return(
      <content>
        <Row>

          <Col sm={5} md={4} lg={3} xl={2}>
            <Row>
              <Col sm={12}>
                <ConferenceSideNav/>
              </Col>
            </Row>
          </Col>

          <Col sm={7} md={8} lg={9} xl={10}>
            <Row>
              <Col sm={12}>
                <ConferenceNavBar/>
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <AnalyticsContent/>
              </Col>
            </Row>

          </Col>

        </Row>

      </content>
    );
  }

}
