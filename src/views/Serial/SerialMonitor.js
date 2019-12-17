import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from './../../store/actions'

import { Card } from 'reactstrap';
import SerialFilter from './SerialFilter';
import SerialInput from './SerialInput';
import SerialFeed from './SerialFeed';

class SerialMonitor extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      filter : "all"
    }

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
  }

  handleFilterChange(newFilter)
  {
    if(newFilter === this.state.filter)
    {
      this.setState({filter:"all"});
    }
    else
    {
      this.setState({filter:newFilter});
    }
  }

  handleMessageInput(message)
  {
    this.props.sendMessage(message);
  }

  render() {
    return (
      <React.Fragment>
          <div className="email-leftbar card">
            <SerialFilter filter={this.state.filter} onFilterChange={this.handleFilterChange} />
          </div>

          <div className="email-rightbar mb-3">
              <Card>
                <div className="p-3">
                  <SerialInput onUserInput={this.handleMessageInput} />
                </div>
                <SerialFeed filter={this.state.filter} data={this.props.feed} showraw={this.state.filter === "raw"} rawlogs={this.props.raw} />
              </Card>
          </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  active : state.DeviceManager.active_connection,
  feed : state.DeviceManager.logs,
  raw : state.DeviceManager.rawlogs,
  device : state.DeviceManager.port.path
})

export default connect(mapStateToProps, { sendMessage })(SerialMonitor);
