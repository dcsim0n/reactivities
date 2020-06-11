import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { cars } from './demo';
import CarItem from './caritem'

export default class App extends Component {

  state ={
    values: [],
  }

  componentWillMount(){
    this.setState({
      values: [{id: 1, name: 'Value 101'},{id: 2, name: 'Value 102'} ]
    })
  }
  render() {
    return (
    <div>
      <ul>
        {this.state.values.map((val: any) => (
        <li>{val.name}</li>))} 
      </ul>  
    </div>
    )
  }
}

