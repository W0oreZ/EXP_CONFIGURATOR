import React from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap';


function InfoWidgets(props) {
  return (
    <Row>
      <Col lg="4">
          <Card className="mini-stat bg-pattern">
              <CardBody className="mini-stat-img">
                  <div className="mini-stat-icon">
                      <i className="dripicons-broadcast bg-soft-primary text-primary float-right h4"></i>
                  </div>
                  <h6 className="text-uppercase mb-3 mt-0">Tracker ID</h6>
                  <h5 className="mb-3">{ props.info.netId ? (props.info.netId) : ("--------") }</h5>
                  <p className="text-muted mb-0"><span className="text-success mr-2"> { props.info.netId ? ("CONNECTED") : ("LOADING....") } </span></p>
              </CardBody>
          </Card>
      </Col>
      <Col lg="4">
          <Card className="mini-stat bg-pattern">
              <CardBody className="mini-stat-img">
                  <div className="mini-stat-icon">
                      <i className="dripicons-box bg-soft-primary text-primary float-right h4"></i>
                  </div>
                  <h6 className="text-uppercase mb-3 mt-0">IMEI</h6>
                  <h5 className="mb-3">{ props.info.imei ? (props.info.imei) : ("---------------") }</h5>
                  <p className="text-muted mb-0"><span className="text-danger mr-2"> { props.info.name ? ("ACTIVE") : ("SIM MODULE INACTIVE") }  </span></p>
              </CardBody>
          </Card>
      </Col>
      <Col lg="4">
          <Card className="mini-stat bg-pattern">
              <CardBody className="mini-stat-img">
                  <div className="mini-stat-icon">
                      <i className="dripicons-tags bg-soft-primary text-primary float-right h4"></i>
                  </div>
                  <h6 className="text-uppercase mb-3 mt-0">Firmware Version</h6>
                  <h5 className="mb-3">{ props.info.version ? (props.info.version) : ("------------") }</h5>
                  <p className="text-muted mb-0"><span className="text-warning mr-2"> Alpha build </span> no updates available</p>
              </CardBody>
          </Card>
      </Col>
  </Row>
  )
}

export default InfoWidgets
