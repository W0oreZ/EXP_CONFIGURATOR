import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Alert } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { connectDevice } from './../../store/actions';

import logo from "./../../assets/images/logo-sm.png";
import DeviceCard from './DeviceCard';

class DeviceLogin extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            error : false
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="home-btn d-none d-sm-block">
                    <Link to="/dashboard" className="text-white"><i className="fas fa-home h2"></i></Link>
                </div>
                <div className="account-pages my-5 pt-5 pb-5">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col md="8" lg="6" xl="5">
                                <Card className="bg-pattern shadow-none" style={{height: "100%"}}>
                                    <CardBody>
                                        <div className="text-center mt-4">
                                            <div className="mb-3">
                                                <Link to="/" className="logo"><img src={logo} height="80" alt="logo" /></Link>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h4 className="font-18 text-center">Device Manager</h4>
                                            <p className="text-muted text-center mb-4">Choose a Device to Connect To.</p>
                                            {this.state.error && <Alert color="danger">
                                                {this.state.error}</Alert>}
                                            <Row>
                                                {
                                                    this.props.ports.map((port,key)=>(
                                                        <Col key={key} lg="12">
                                                            <DeviceCard 
                                                                onClick={this.props.connectDevice} 
                                                                handleManageClick={()=>this.props.history.push("/dashboard")}
                                                                port={port} 
                                                                active={this.props.active === port.path ? true : false} 
                                                            />
                                                        </Col>
                                                    ))
                                                }
                                            </Row>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-5 text-center text-white-50">
                                    <p>© {new Date().getFullYear()} EXP Configurator. Crafted with <i className="mdi mdi-heart text-danger"></i> by Geo16.net</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
  ports : state.DeviceManager.ports,
  active : state.DeviceManager.port.path
})

export default connect(mapStateToProps, { connectDevice })(withRouter(DeviceLogin));
