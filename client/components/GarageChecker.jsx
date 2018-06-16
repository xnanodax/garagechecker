import React from 'react';
import UpdateStatus from './Loading';
import socketIOClient from 'socket.io-client';

class GarageChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: "",
      updatedAt: "",
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

  formatTime(date) {
    const currDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    const currTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return `${currDate} ${currTime}`;
  }

  fetchLatestEntry() {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const siteURL = '/api/latest';

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        const isClosed = JSON.parse(xhr.responseText).status;
        const updatedAt = JSON.parse(xhr.responseText).created_at;
        const updatedAtFormatted = this.formatTime(new Date(updatedAt));
        this.setState({ isClosed, updatedAt: updatedAtFormatted });
      }
    }
    
    xhr.open(method, siteURL);
    xhr.send();
  }

  componentDidMount() {
    this.fetchLatestEntry();
  }

  render() {
    let border = this.state.isClosed === "True" ? "border green" : "border red";
    let time = this.state.updatedAt === "" ? false : this.state.updatedAt;
    const socket = socketIOClient(this.state.endpoint);

    socket.on('connect', function() {
      console.log("connecting to websocket");
    })

    socket.on('disconnect', function() {
      console.log("disconnecting to websocket");
    })

    socket.on('change color', (color)=> {
      document.body.style.backgroundColor = color;
    })

    return (
      <div className={border}>
        <h2 className="title">Garage Checker</h2>
        <UpdateStatus time={time}/>

        <div style={{ textAlign: "center" }}>
          <button id="gray" onClick={() => this.setColor('gray')}>Gray</button>
          <button id="white" onClick={() => this.setColor('white')}>White</button>
        </div>
      </div>
    );
  }

}

export default GarageChecker;