import React from 'react'
import { CardBody } from 'reactstrap';

export default function Ports(props) {
  return (
    <div 
    onClick={()=>props.onClick(props.port)}
    className={ "card text-primary pr-2 mb-2 shadow border border-secondary"}>
      <div className="row no-gutters">
        <div className="col-md-12">
          <CardBody>
            <h5 className="card-title font-16" >{props.port.manufacturer}</h5>
            <p className="card-text">{props.port.path}</p>
          </CardBody>
        </div>
      </div>
    </div>
  )
}
