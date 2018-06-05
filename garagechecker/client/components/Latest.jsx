import React from 'react';

class Latest extends React.Component {
  componentDidMount() {
    this.fetchLatestEntry();
  }

  fetchLatestEntry() {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const siteURL = '/api/latest';

    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
          const doorStatus = JSON.parse(this.responseText).status
          const doorTimeStamp = JSON.parse(this.responseText).created_at
          console.log(doorStatus, doorTimeStamp);
        }
      } else {
        console.error("could not receive data")
      }
    }

    xhr.open(method, siteURL);
    xhr.send();

  }

  render() {
    return (
      <h1>Hello I am the Latest Component</h1>
    )
  }

}

export default Latest;