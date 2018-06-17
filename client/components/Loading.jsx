import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSpinner, faCheckCircle, faTimesCircle } from '@fortawesome/fontawesome-free-solid';
import '../css/Loading.css';
import '../css/bounceIn.css';
import TimeAgo from 'react-timeago';
import socketIOClient from 'socket.io-client';

fontawesome.library.add(faSpinner);
fontawesome.library.add(faCheckCircle);
fontawesome.library.add(faTimesCircle);

const UpdateStatus = ({time, status}) => {
    const message = status === "True" ? "closed": "open"; 
    let icon;
    if (status === 'True') {
      icon = <FontAwesomeIcon key={0} icon="check-circle" size="3x" color="green" className="bounceIn"/>;
    } else {
      icon = <FontAwesomeIcon key={0} icon="times-circle" size="3x" color="red" className="bounceIn"/>;
    }

    if (time) {
      return ([
      icon,
      <br key={1} />,
      <div key={2}>Door is {message}</div>,
      <b key={3}>Updated at:</b>, 
      <TimeAgo key={4} date={time} />,
      <div key={5}>{time}</div>])
    } else {
      return <FontAwesomeIcon icon="spinner" size="2x" className="spin"/>
    }
};

export default UpdateStatus;

