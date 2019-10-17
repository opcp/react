import React, { Component } from 'react';
import ReactDom from 'react-dom';
import TodoApp from './todo/TodoApp';
import Service from './test/Service'

// import BootstrapTest from './bootstrap/BootstrapTest'

ReactDom.render(<Service />,document.getElementById('root'))

