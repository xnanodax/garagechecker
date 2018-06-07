import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSpinner, faCheckCircle } from '@fortawesome/fontawesome-free-solid';
import '../css/Loading.css';
import '../css/bounceIn.css';
import TimeAgo from 'react-timeago';

fontawesome.library.add(faSpinner);
fontawesome.library.add(faCheckCircle);

const UpdateStatus = ({time}) => {
    if (time) {
      return ([
      <FontAwesomeIcon key={0} icon="check-circle" size="3x" color="green" className="bounceIn"/>,
      <br key={1}></br>,
      <b key={2}>Updated at:</b>, 
      <TimeAgo key={4} date={time} />,
      <div key={3}>{time}</div>])
    } else {
      return <FontAwesomeIcon icon="spinner" size="2x" className="spin"/>
    }
};

export default UpdateStatus;

