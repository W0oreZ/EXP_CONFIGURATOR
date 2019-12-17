import React from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap';

function DeviceConfig(props) {
  return (
    <React.Fragment>
      <Card className="mini-stat">
        <CardBody>
          <div className="mini-stat-icon mb-3">
            <i className="dripicons-broadcast bg-soft-primary text-secondary float-right h4"></i>
          </div>

          <h6 className="text-uppercase mb-3 mt-0">Tracker Configuration</h6>

          <Row className="mb-4">
            <Col>
              <p className="text-info mb-4">
                GSM Configuration
              </p>
              <dl className="row mb-2">
                <dt className="col-sm-3">APN</dt>
                <dd className="col-sm-9">{props.config.apn ? (props.config.apn) : ("N/A")}</dd>

                <dt className="col-sm-3">GPRS USER</dt>
                <dd className="col-sm-9">{props.config.gprsUser ? (props.config.gprsUser) : ("N/A")}</dd>

                <dt className="col-sm-3">GPRS PASSWORD</dt>
                <dd className="col-sm-9">{props.config.gprsPass ? (props.config.gprsPass) : ("N/A")}</dd>
              </dl>
            </Col>
            <Col>
              <p className="text-info mb-4">
                GPRS Configuration
              </p>
              <dl className="row mb-2">
                <dt className="col-sm-3">SERVER IP</dt>
                <dd className="col-sm-9">{props.config.broker ? (props.config.broker) : ("N/A")}</dd>

                <dt className="col-sm-3">SERVER PORT</dt>
                <dd className="col-sm-9">{props.config.port ? (props.config.port) : ("N/A")}</dd>
              </dl>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-info mb-4">
                DATA Transmition
              </p>
              <dl className="row mb-2">
                <dt className="col-sm-3">Send Period</dt>
                <dd className="col-sm-9">{props.config.interval ? (props.config.interval) : ("N/A")}</dd>

                <dt className="col-sm-3">MAX Saved Records</dt>
                <dd className="col-sm-9">1</dd>
              </dl>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default DeviceConfig;
