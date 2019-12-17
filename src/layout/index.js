import React, { Component } from 'react';
import { connect } from 'react-redux';

import { activateMainLayout, deactivateMainLayout } from './../store/actions';
import Topbar from './Topbar';
import Footer from './Footer';

// render if MAIN Layout
const WithLayoutContent = (props) => {

  const Header = props.headerComponent;
  document.body.classList.remove('bg-primary');

  return <React.Fragment>
    <div className={(() => {
      switch (window.location.pathname) {
        case "/layouts-header-dark": return "header-bg dark-header";
        case "/layouts-topbar-light": return "header-bg topbar-light";
        default: return "header-bg";
      }
    })()} >

      <Topbar />
      {Header && <Header />}
    </div>

    <div className="wrapper">
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
    <Footer />
  </React.Fragment>
}

// render without layout
const WithoutLayoutContent = (props) => {
  return <React.Fragment>
    {props.children}
  </React.Fragment>
}

class Layout extends Component {

  constructor(props) {

    super(props);
    this.setLayoutWidth = this.setLayoutWidth.bind(this);
    this.state = {};

  }

  /**
   * Sets the layout width based on redux scope
   **/
  setLayoutWidth() {
    if (this.props.isBoxed) {
      document.body.classList.add('layout-width');
    } else {
      document.body.classList.remove('layout-width');
    }
  } 

  componentDidMount() {

    if (this.props.layoutType !== 'Main') {
      document.body.classList.add('bg-primary');
    }

    if(this.props.isNonLayout)
    {
      document.body.classList.add('pb-0');
      this.props.deactivateMainLayout();
    }
    else
    {
      this.props.activateMainLayout();
    }
    this.setLayoutWidth();
  }


  render() {
    return (
      <React.Fragment>
        {this.props.layout.layoutType === 'Main' ? <WithLayoutContent {...this.props} /> : <WithoutLayoutContent {...this.props} />}
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  return {
    layout: state.Layout
  };
}

export default connect(mapStatetoProps, { activateMainLayout, deactivateMainLayout })(Layout);
