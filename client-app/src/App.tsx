import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import { cars } from './demo';
import CarItem from './caritem'
import API from './api';

export default class App extends Component {

  state ={
    values: [],
  }

  componentWillMount(){
    axios.get(API.values)
    .then((response)=>{
      console.log('response', response)
      this.setState({
        values: response.data
      })
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

