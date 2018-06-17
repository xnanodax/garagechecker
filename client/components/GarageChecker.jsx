import React from 'react';
import UpdateStatus from './Loading';
import socketIOClient from 'socket.io-client';

class GarageChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      updatedAt: "",
      loading: true,
      // endpoint: "localhost:4001",
      endpoint: "https://garagechecker.herokuapp.com/",
      color: "white"
    };
  }

  send() {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color)
  }

  setColor(color) {
    this.setState({ color }, this.send)
  }

  formatTime(dateString) {
    const dateObj = new Date(dateString);
    const currDate = `${dateObj.getMonth()+1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
    const currTime = `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
    return `${currDate} ${currTime}`;
  }

  fetchLatestEntry() {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const siteURL = '/api/latest';

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        const status = JSON.parse(xhr.responseText).status;
        const updatedAt = JSON.parse(xhr.responseText).created_at;
        const updatedAtFormatted = this.formatTime(updatedAt);
        this.setState(
          { status, 
            updatedAt: updatedAtFormatted 
          }
      );
      }
    }
    
    xhr.open(method, siteURL);
    xhr.send();
  }

  componentDidMount() {
    this.fetchLatestEntry();
  }

  render() {
    let border = this.state.status === "True" ? "border green" : "border red";
    let time = this.state.updatedAt === "" ? false : this.state.updatedAt;
    const socket = socketIOClient(this.state.endpoint);

    socket.on('connect', function() {
      console.log("react: connecting to websocket");
    })

    socket.on('disconnect', function() {
      console.log("react: disconnecting to websocket");
    })

    socket.on('is door closed', (dbObj)=> {
      console.log("react: update door status", dbObj);
      this.setState(
        { status: dbObj.status, 
          updatedAt: this.formatTime(dbObj.created_at)
        }
      );
    })

    return (
      <div className={border}>
        <h2 className="title">Garage Checker</h2>
        <UpdateStatus time={time} status={this.state.status}/>

      </div>
    );
  }

}

export default GarageChecker;