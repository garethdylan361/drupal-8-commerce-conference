import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class ManageContent extends React.Component {

  constructor(props){
    super(props);
    props.title
  }

  render() {
    return (
      <Panel header="Header">

      </Panel>
    );
  }

}
