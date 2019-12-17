import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { flashConfig } from './../../store/actions';

class SettingWindow extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      newConfig:{
        apn:"",
        gprsUser:"",
        gprsPass:"",
        broker:"",
        port:"",
        interval:""
      }
    }

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleFlash = this.handleFlash.bind(this);
  }

  handleValueChange(e) {
    this.setState({
      ...this.state,
      newConfig:{
        ...this.state.newConfig,
        [e.target.name]:e.target.value
      }
    })
  }

  handleFlash() {
    let conf = {...this.state.newConfig};

    if(conf.apn === "")
    {
      conf.apn = this.props.config.apn
    }
    if(conf.gprsUser === "")
    {
      conf.gprsUser = this.props.config.gprsUser
    }
    if(conf.gprsPass === "")
    {
      conf.gprsPass = this.props.config.gprsPass
    }
    if(conf.broker === "")
    {
      conf.broker = this.props.config.broker
    }
    if(conf.port === "")
    {
      conf.port = this.props.config.port
    }
    if(conf.interval === "")
    {
      conf.interval = this.props.config.interval
    }

    console.log("flashing : ", conf);

    this.props.flashConfig(conf);

    this.setState({
      newConfig:{
        apn:"",
        gprsUser:"",
        gprsPass:"",
        broker:"",
        port:"",
        interval:""
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Setup new Tracker Configuration</h4>
                <p className="text-muted mb-4">Note the changes will take effect after the device restart.</p>

                <Row className="form-group">
                    <label className="col-sm-2 col-form-label">APN</label>
                    <Col sm="10">
                        <input className="form-control" type="text" onChange={this.handleValueChange} name="apn" />
                    </Col>
                </Row>
                <Row className="form-group">
                    <label className="col-sm-2 col-form-label">GPRS USER</label>
                    <Col sm="10">
                        <input className="form-control" type="text" onChange={this.handleValueChange} name="gprsUser"/>
                    </Col>
                </Row>
                <Row className="form-group">
                    <label className="col-sm-2 col-form-label">GPRS PASS</label>
                    <Col sm="10">
                        <input className="form-control" type="text" onChange={this.handleValueChange} name="gprsPass"/>
                    </Col>
                </Row>
                <Row className="form-group">
                    <label className="col-sm-2 col-form-label">SERVER IP</label>
                    <Col sm="10">
                        <input className="form-control" type="text" onChange={this.handleValueChange} name="broker"/>
                    </Col>
                </Row>
                <Row className="form-group">
                    <label className="col-sm-2 col-form-label">SERVER PORT</label>
                    <Col sm="10">
                        <input className="form-control" type="number" onChange={this.handleValueChange} name="port"/>
                    </Col>
                </Row>
                <Row className="form-group">
                    <label className="col-sm-2 col-form-label"> DATA SEND Interval <small className="text-info">in ms</small></label>
                    <Col sm="10">
                        <input className="form-control" type="number" onChange={this.handleValueChange} name="interval"/>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col sm="12">
                      <button className="btn btn-success btn-lg" onClick={this.handleFlash} >Flash</button>
                    </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state =>({
  config: state.DeviceManager.config
})

export default connect(mapStateToProps, { flashConfig })(SettingWindow);