import React, { Component } from 'react';
import { render } from 'react-dom';
import Card from './Card';
import Form from './Form';
import './style.css';

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
  
 <div> 
   {props.profiles.map( profile => <Card {...profile}/>)}
  </div>
);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profiles:testData
    }
  }
  render(){
    return(
      <div>
        <div className="header">{this.props.title}</div> 
        <Form />
        <CardList profiles={this.state.profiles}/>
      </div>
    )
  }
}

render(<App title="The Github Card App" />, document.getElementById('root'));
