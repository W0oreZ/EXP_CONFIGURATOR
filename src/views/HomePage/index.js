import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from "./../../assets/images/logo-sm.png";
import { connect } from 'react-redux';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

 

    render() {

        return (
            <React.Fragment>
                <div className="account-page-full-height bg-primary">
                    <div className="container-fluid">
                        <Row className="align-items-center">
                            <Col xl="3" className="bg-white">
                                <div className="account-page-full-height">
                                    <div className="p-3">
                                        <div>
                                            <div className="text-center py-4">
                                                <Link to="/dashboard"  className="logo"><img src={logo} height="50" alt="logo" /></Link>
                                            </div>
                                            <div className="text-left">
                                              <h4 className="font-18 text-center">EXP</h4>
                                              <p className="text-muted text-center mb-5">Configurator</p>
                                              {
                                                this.props.active ? 
                                                (
                                                  <Link to="/dashboard">
                                                    <Button className="btn-block btn-lg btn-icon mt-5" color="primary">
                                                      <span className="float-left btn-icon-label">
                                                        <i className="ion ion-md-speedometer mr-2"></i>
                                                      </span> 
                                                      Dashboard
                                                    </Button>
                                                  </Link>
                                                ) : ("")
                                              }
                                              <Link to="/device-connection">
                                                <Button className="btn-block btn-lg btn-icon mt-5" color="secondary">
                                                  <span className="float-left btn-icon-label">
                                                    <i className="mdi mdi-bullseye-arrow mr-2"></i>
                                                  </span> 
                                                  Scan Ports
                                                </Button>
                                              </Link>
                                            </div>
                                            <div className="mt-5 text-center">
                                                <p>© {new Date().getFullYear()}  EXP-CONF. Crafted with <i className="mdi mdi-heart text-danger"></i> by Geo16.net</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl="9">
                                <div className="text-white">
                                    <Row>
                                        <Col xl="4">
                                            <div className="text-center account-process p-4">
                                                <h5 className="mt-0 mb-5 d-inline-block p-3 bg-primary rounded-circle border border-light position-relative">01</h5>
                                                <div className="mb-4">
                                                    <i className="ti-pencil-alt h1"></i>
                                                </div>
                                                <h5>Plug In Device</h5>
                                                <p className="text-white-50">connect the EXP-Tracker to your Computer</p>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="text-center account-process p-4">
                                                <h5 className="mt-0 mb-5 d-inline-block p-3 bg-primary rounded-circle border border-light position-relative">02</h5>
                                                <div className="mb-4">
                                                    <i className="ti-user h1"></i>
                                                </div>
                                                <h5>Launch Scan</h5>
                                                <p className="text-white-50">click the Scan button to detect the device</p>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="text-center p-4">
                                                <h5 className="mt-0 mb-5 d-inline-block p-3 bg-primary rounded-circle border border-light position-relative">03</h5>
                                                <div className="mb-4">
                                                    <i className="ti-bookmark-alt h1"></i>
                                                </div>
                                                <h5>Connect & Manage</h5>
                                                <p className="text-white-50">Connect to the tracker to start using EXPCO</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state=>({
  active : state.DeviceManager.active_connection
})

export default connect(mapStateToProps)(HomePage);




