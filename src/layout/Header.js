import React from 'react';
import { Link } from 'react-router-dom';


const withHeader = (title, breadCrumbItems) => {
    return class extends React.Component {
        render() {
            return <React.Fragment>
                <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            {title && <h4 className="page-title">{title}</h4>}
                              <ol className="breadcrumb">
                                  {title === "Dashboard" ?
                                   null : <li className="breadcrumb-item"><Link to="/dashboard"><i className="mdi mdi-home-outline"></i></Link></li>  }
                                   {breadCrumbItems.map((item, idx) => {
                                    return <li className="breadcrumb-item" key={idx}>
                                        {item.title}
                                    </li>
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
              </div>
            </React.Fragment>
        }
    };
}

export default withHeader;