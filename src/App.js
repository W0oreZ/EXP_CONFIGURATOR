import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import { connect } from 'react-redux';

import DeviceService from './services/DeviceService';

import Layout from './layout';
import routes from './routes';

import './custom.css';
import './App.scss';

function withLayout(WrappedComponent, headerComponent, layoutConfig) {
  return class extends React.Component {
    render() {
      const layout = layoutConfig || {};
      return(
        <Layout headerComponent={headerComponent} {...layout}>
          <WrappedComponent></WrappedComponent>
        </Layout>
      )
    }
  };
}

class App extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {};
  }

  render() {
    
    return(
      <React.Fragment>
        <Router>
          <Switch>
            {routes.map((route, idx) =>
              route.ispublic ?
                <Route path={route.path} component={route.component} key={idx} />
                :
                <PrivateRoute connected={this.props.connected} path={route.path} component={withLayout(route.component, route.headerComponent, route.layoutConfig || {})} key={idx} />
            )}
          </Switch>
        </Router>
        <DeviceService rate={500} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state=>(
  {
    connected : state.DeviceManager.active_connection
  }
)

export default connect(mapStateToProps)(App);
