import React from 'react';
import UpdateStatus from './Loading';

class GarageChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: "",
      updatedAt: ""
    };
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

    return (
      <div className={border}>
        <h2 className="title">Garage Checker</h2>
        <UpdateStatus time={time}/>
      </div>
    );
  }

}

export default GarageChecker;