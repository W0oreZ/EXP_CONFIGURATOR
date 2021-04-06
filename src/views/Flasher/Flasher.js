import React, { Component } from 'react'
import { connect } from 'react-redux';
import { flashFirmware } from './../../store/actions';
import Ports from './Ports';


class Flasher extends Component {
  constructor(props) {
    super(props);
    this.test= this.test.bind(this);
  }

  test(port) {
    console.log(port);
    this.props.flashFirmware(port);
  }
  
  render() {
    return (
      <div>
        select device to start the firmware upgrade : 
        {
          !this.props.flasher.running ? 
          (
            <>{this.props.ports.map((port,key)=>(
              <Ports key={key} port={port} onClick={this.test} />
            ))}</>
          ) :
          (
            <div>Flashing</div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state =>({
  ports : state.DeviceManager.ports,
  flasher : state.DeviceManager.flasher
})

export default connect(mapStateToProps, { flashFirmware })(Flasher);