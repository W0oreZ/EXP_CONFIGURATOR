import React, { Component } from 'react'
import { Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink   } from 'reactstrap';
import classnames from 'classnames';

import AnalogueSensors from './AnalogueSensors';

class Sensors extends Component {

  constructor(props) {
    super(props);
    this.state = {  activeTab: '1', }
    this.toggleSensors = this.toggleSensors.bind(this);
  }

  toggleSensors(tab) {
    if (this.state.activeother !== tab) {
      this.setState({
          activeTab: tab
      });
    }
  }

  render() {
    return (
      <Card className="messages social-source">
        <CardBody>
          <h4 className="mt-0 header-title">Sensors Overview</h4>
          <Nav tabs className="tab-wid recent-stock-widget nav-justified">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggleSensors('1'); }}>
                <i className="dripicons-device-desktop h4 product-icon"></i>
                <p className="text-muted mb-0">Analogique</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggleSensors('2'); }} >
                <i className="dripicons-monitor h4 product-icon"></i>
                <p className="text-muted mb-0">Digital</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggleSensors('3'); }} >
                <i className="dripicons-monitor h4 product-icon"></i>
                <p className="text-muted mb-0">RFID</p>
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
                {this.props.sensors.ai1 && this.props.sensors.ai2 ? 
                  (
                    <div className="text-center">
                      <AnalogueSensors ai1={this.props.sensors.ai1} ai2={this.props.sensors.ai2} />
                      <h5 className="font-18">Current Values</h5>
                      <p style={{color:"#4090cb"}} className="mb-0">{("ai1: " + this.props.sensors.ai1.value + " V")}</p>
                      <p style={{color:"#eb6776"}} className="mb-0">{("ai2: " + this.props.sensors.ai2.value + " V")}</p>
                    </div>
                  ) :
                  (
                    ""
                  ) 
                }
            </TabPane>
            <TabPane tabId="2">
              <div className="text-center">
                <div id="radial-chart-2">
                chart
                </div>
                <h5 className="font-18">Laptop</h5>
              </div>
            </TabPane>
            <TabPane tabId="3">
              {this.props.sensors.rfid?
                (
                  <div className="text-center">
                    <h3>{(this.props.sensors.rfid.value)}</h3>
                    <h5 className="font-18">RFID</h5>
                  </div>
                ) :
                (
                  ""
                )
              }
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    )
  }
}

export default Sensors;