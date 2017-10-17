import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {background: 'green'};

    }
    ChangeBackground(event){
        this.setState({background: event.target.value});
    }
  render() {
    return (
      <div className="App" style={this.state.background}>
          <select name="speed" id="speed" onChange={this.ChangeBackground.bind(this)}>
              <option>red</option>
              <option>yellow</option>
              <option selected="selected">green</option>
              <option>blue</option>
              <option>purple</option>
          </select>
      </div>
    );
  }
}

export default App;
