import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {startTime: 0,pauseTime: 0,pauseInterval:0,time: 0,start:false,pause:false,restart:false};
  }
    componentDidMount() {
        setInterval(this.ValueOfTime.bind(this),1000);

    }

    ValueOfTime(){
      if(this.state.start==true) {

          const CurrentDate = new Date();
          let timer = CurrentDate - this.state.startTime -this.state.pauseInterval;
          timer = timer/1000;
          this.setState({time: timer});

      }
      if(this.state.pause==true){
          const CurrentDate = new Date();
          let interval = CurrentDate - this.state.pauseTime + this.state.pauseInterval ;
          this.setState({pauseInterval: interval});
      }
    }

    start(){

          this.setState({start:true,pause:false});
          if(this.state.start==false && this.state.pause==false){
              this.setState({startTime: new Date()});
          }


    }

    pause(){
      this.setState({start:false,pause: true, pauseTime:new Date()});
    }

    restart(){
      this.setState({startTime:new Date(),pauseTime: 0,pauseInterval:0,time: 0,start:false,pause:false});
    }

  render() {
    return (
      <div className="Timer">
          This is timer:
          <span>{this.state.time}</span>
          <div>
            <button onClick={this.start.bind(this)}>Start</button>
            <button onClick={this.pause.bind(this)}>Pause</button>
            <button onClick={this.restart.bind(this)}>Restart</button>
          </div>
      </div>
    );
  }
}

export default Timer;