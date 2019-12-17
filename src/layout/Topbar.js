import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import SubMenu from './SubMenu';
import Menu from './Menu';
import { withRouter } from "react-router";

import logoDark from "./../assets/images/logo-dark.png";
import logoSmall from "./../assets/images/logo-sm.png";

import { links } from './../routes';

class Topbar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    toggleFullscreen() {
        if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    componentDidMount() {

        var matchingMenuItem = null;
        var ul = document.getElementById("custom_id");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = (item) => {

        item.classList.add('active');
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add('active'); // li 
            const parent2 = parent.parentElement;

            const parent3 = parent2.parentElement;
            if (parent3) {
                parent3.classList.add('active'); // li 
                const parent4 = parent3.parentElement;
                if (parent4) {
                    parent4.classList.add('active'); // li 
                    const parent5 = parent4.parentElement;
                    if (parent5) {
                        parent5.classList.add('active'); // li 
                    }
                }
            }
        }
        return false;
    }

    render() {
        return (
            <React.Fragment>
                <header id="topnav">
                    <div className="topbar-main">
                        <div className="container-fluid">
                            <div className="logo">
                                <Link to="/" className="logo">
                                    <img src={logoSmall} alt="" className="logo-small" />

                                    {window.location.pathname === "/layouts-topbar-light" ?
                                        <img src={logoDark} alt="" className="logo-large" />
                                        :
                                        <img src={logoSmall} alt="" className="logo-large" />
                                    }
                                    EXP Configurator
                                </Link>
                            </div>
                            <div className="menu-extras topbar-custom">
                                <ul className="navbar-right list-inline float-right mb-0">
                                   

                                    

                                    <li className="dropdown notification-list list-inline-item d-none d-md-inline-block ml-1">
                                        <span onClick={this.toggleFullscreen} className="nav-link" to="#" id="btn-fullscreen">
                                            <i className="ion ion-md-qr-scanner noti-icon"></i>
                                        </span>
                                    </li>

                                    

                                    <li className="menu-item list-inline-item">
                                        <span onClick={() => this.setState({ toggle1: !this.state.toggle1 })} className="navbar-toggle nav-link">
                                            <div className="lines">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="navbar-custom">
                        <div className="container-fluid">
                            <div id="navigation" style={{ display: this.state.toggle1 ? 'none' : 'block' }}>
                                <ul className="navigation-menu" id="custom_id">

                                    {links.map((item, i) => {
                                        if (item.ismega) {
                                            return null;
                                        }
                                        else {
                                            if (item.children) {
                                                return <SubMenu item={item} key={i} />
                                            } else {
                                                return <li className={item.class_name} key={i}> <Menu item={item} /></li>
                                            }
                                        }
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default withRouter(Topbar);









