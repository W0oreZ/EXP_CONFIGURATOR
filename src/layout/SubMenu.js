import React, { Component } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

class SubMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.SubMenuClick = this.SubMenuClick.bind(this);
    }

    SubMenuClick = (event) => {
        event.preventDefault();
        const subMenu = event.target.nextSibling;
        const parent = event.target.parentElement;
        var width = window.innerWidth;
        if (width < 992) {
            if (subMenu) subMenu.classList.toggle('open');
            if (parent) parent.classList.toggle('open');
        }
        return false;
      }


    render() {
        const item = this.props.item || {};
        return (
            <React.Fragment>
                <li className="has-submenu ml-1">
                    <Link to="/#" onClick={this.SubMenuClick}>
                        {item.icon ? <i className={item.icon}></i> : null}
                        {item.label ? item.label : null}{' '}
                    </Link>
                    <ul className="submenu">
                        {item.children.map((child, i) => {
                            if (child.children) {
                                return <SubMenu item={child} key={i} />
                            } else {
                                return <li  key={i}> <Menu item={child} /></li>
                            }
                        })}
                    </ul>
                </li>
            </React.Fragment>
        );

    }

}

export default SubMenu;
