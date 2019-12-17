import React, { Component } from 'react';
import { connect } from 'react-redux';

import { scanPorts, loadConfig } from './../store/actions';

class DeviceService extends Component {
  constructor(props)
  {
    super(props);
    this.state={ scanTimer : false , configTimer : false}

    this.getConfig = this.getConfig.bind(this);
    this.getPorts = this.getPorts.bind(this);
  }

  componentDidMount()
  {
    this.setState({
      scanTimer: setInterval(this.getPorts, this.props.rate),
      configTimer: setInterval(this.getConfig, 5000),
    })
  }

  componentWillUnmount()
  {
    clearInterval(this.state.scanTimer);
    clearInterval(this.state.configTimer);
  }

  getConfig() {
    if(!this.props.configLoaded)
    {
      this.props.loadConfig();
    }
  }

  getPorts() {
    if(!this.props.active)
    {
      this.props.scanPorts();
    }
  }

  render() {
    return (
      <React.Fragment></React.Fragment>
    )
  }
}
const mapStateToProps = state =>({
  active : state.DeviceManager.active_connection,
  configLoaded : state.DeviceManager.config.loaded
})
export default connect(mapStateToProps, { scanPorts, loadConfig } )(DeviceService);
