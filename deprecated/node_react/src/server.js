
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import Root from './app/root';
// import template from './template_html';

// const React = require('react');
// const Root = './app/root';
// const renderReact = require('./renderReact.js');
// const template = './template_html';


const express = require('express');
const server = express();

server.use(express.static(__dirname + '/assets'));

server.use('/assets', express.static('assets'));

server.get('/', (req, res)=> {
    res.sendFile(__dirname + '/template.html')
})



server.listen(3000, () => console.log('Example app listening on port 3000!'));