import React from 'react'
import { CardBody, Button } from 'reactstrap';

import deviceImage from './../../assets/images/products/device_display_icon.png';

export default function DeviceCard(props) {
  return (
    <div 
      className={ "card text-primary pr-2 mb-2 shadow " + (props.active ? "border border-success" : "border border-info")}
      >
      <div className="row no-gutters">
        <div className="col-md-8">
            <CardBody>
                <h5 className="card-title font-16" >{props.port.manufacturer}</h5>
                <p className="card-text" onClick={()=>props.onClick(props.port)}>{props.port.path}</p>
                <p className="card-text text-success">
                  {
                    props.active ? 
                    (<>
                      <Button onClick={props.handleManageClick}>Manage</Button>
                      <small className="text-warning ml-3" onClick={()=>props.onClick(props.port)}>Disconnect</small>
                    </>) 
                    : (<small className="text-muted mr-3" onClick={()=>props.onClick(props.port)}>Click To Connect</small>)
                  }
                  
                </p>
            </CardBody>
        </div>
        <div className="col-md-4 pr-2">
            <img className="card-img img-fluid" src={deviceImage} />
        </div>
      </div>
    </div>
  )
}
