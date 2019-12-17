import React, { Component } from 'react'

class SerialInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input : ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e)
  {
    e.preventDefault();
    this.props.onUserInput(this.state.input);
    this.setState({input:""});
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <input 
            className="form-control" 
            value={this.state.input}  
            onChange={(e)=>this.setState({input:e.target.value})}
            type="text" 
            placeholder="enter message..."
          />
          <button className="btn btn-primary waves-effect waves-light float-right" type="submit" onClick={this.handleSubmit}> 
            <span>Send</span> <i className="fab fa-telegram-plane ml-1"></i> 
          </button>
        </div>
      </form>
    )
  }
}

export default SerialInput;
