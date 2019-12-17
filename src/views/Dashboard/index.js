import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'

import InfoWidgets from './InfoWidgets'
import DeviceConfig from './DeviceConfig'
import Sensors from './Sensors';

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <InfoWidgets info={this.props.info} />
        <Row>
          <Col xl="8">
            <DeviceConfig config={this.props.config} />
          </Col>

          <Col xl="4">
            <Sensors sensors={this.props.sensors} />
          </Col>
        </Row>

        <Row>
        </Row>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state=>({
  info : state.DeviceManager.info,
  config : state.DeviceManager.config,
  sensors : state.DeviceManager.sensors
})

export default connect(mapStateToProps, {  })(Dashboard);