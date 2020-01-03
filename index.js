import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends React.Component{
  render(){
    return(
      <div>
        <div className="header">{this.props.title}</div> 
      </div>
    )
  }
}

render(<App title="The Github Card App" />, document.getElementById('root'));
