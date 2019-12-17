import React from 'react'
import { Link } from 'react-router-dom'

export default function SerialFilter(props) {
  return (
    <React.Fragment>
      
      <button className="btn btn-danger btn-block waves-effect waves-light">Clear Monitor</button>

      <h6 className="mt-4">Filters</h6>

      <div className="mail-list mt-1">
        <Link to="#" onClick={()=>props.onFilterChange("log")}>
          <div className="custom-control custom-radio mb-2">
              <input 
                checked={props.filter === "log" || props.filter === "all"?(true):(false)}
                type="radio" 
                id="log" 
                name="logRadio" 
                className="custom-control-input mr-2" />
              <label className="custom-control-label" htmlFor="log">
                LOG
              </label>
              <span className="mdi mdi-arrow-right-drop-circle text-success float-right"></span>
          </div>
        </Link>
        <Link to="#" onClick={()=>props.onFilterChange("warn")}>
          <div className="custom-control custom-radio mb-2">
              <input 
                checked={props.filter === "warn" || props.filter === "all"?(true):(false)}
                type="radio" 
                id="warn" 
                name="warnRadio" 
                className="custom-control-input mr-2" />
              <label className="custom-control-label" htmlFor="warn">
                WARNING
              </label>
              <span className="mdi mdi-arrow-right-drop-circle text-warning float-right"></span>
          </div>
        </Link>
        <Link to="#" onClick={()=>props.onFilterChange("error")}>
          <div className="custom-control custom-radio mb-2">
              <input 
                checked={props.filter === "error" || props.filter === "all"?(true):(false)}
                type="radio" 
                id="error" 
                name="errorRadio" 
                className="custom-control-input mr-2" />
              <label className="custom-control-label" htmlFor="error">
                ERROR
              </label>
              <span className="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>
          </div>
        </Link>
        <Link to="#" onClick={()=>props.onFilterChange("event")}>
          <div className="custom-control custom-radio mb-2">
              <input 
                checked={props.filter === "event" || props.filter === "all"?(true):(false)}
                type="radio" 
                id="event" 
                name="eventRadio" 
                className="custom-control-input mr-2" />
              <label className="custom-control-label" htmlFor="event">
                EVENT
              </label>
              <span className="mdi mdi-arrow-right-drop-circle text-info float-right"></span>
          </div>
        </Link>
        <Link to="#" onClick={()=>props.onFilterChange("unhandled")}>
          <div className="custom-control custom-radio mb-2">
              <input 
                checked={props.filter === "unhandled" || props.filter === "all"?(true):(false)}
                type="radio" 
                id="unhandled" 
                name="unhandledRadio" 
                className="custom-control-input mr-2" />
              <label className="custom-control-label" htmlFor="unhandled">
                UNHANDLED
              </label>
              <span className="mdi mdi-arrow-right-drop-circle text-secondary float-right"></span>
          </div>
        </Link>

        <Link to="#" onClick={()=>props.onFilterChange("raw")}>
          <div className="mt-5 custom-control custom-checkbox mb-2">
              <input 
                checked={props.filter === "raw"?(true):(false)}
                type="checkbox" 
                id="raw" 
                name="rawCheckbox" 
                className="custom-control-input mr-2" />
              <label className="custom-control-label" htmlFor="raw">
                View Raw
              </label>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}
