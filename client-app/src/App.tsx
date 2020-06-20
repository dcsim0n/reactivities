import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import { cars } from './demo';
import CarItem from './caritem'
import API from './api';
import { Header, Icon, List } from 'semantic-ui-react';


export default class App extends Component {

  state ={
    values: [],
  }

  componentDidMount(){
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
      <Header as='h2' >
        <Icon name='users' />
        <Header.Content>Reactivities</Header.Content> 
      </Header>
      <List>
        {this.state.values.map((val: any) => (
          <List.Item key={ val.id }>
            { val.name }
          </List.Item>))} 
      </List>
    </div>
    )
  }
}

