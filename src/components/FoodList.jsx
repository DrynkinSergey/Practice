import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { Item } from './Item'
import {List} from './List'
const foodsListData = [
  {id: 1, name: 'Carrot', price: 10},
  {id: 2, name: 'Cupcake', price: 450},
  {id: 3, name: 'Apple', price: 22},
  {id: 4, name: 'Cabbage', price: 30},
]

export  class FoodList extends Component {
  state ={
    foods: [
  {id: 1, name: 'Carrot', price: 10},
  {id: 2, name: 'Cupcake', price: 450},
  {id: 3, name: 'Apple', price: 22},
  {id: 4, name: 'Cabbage', price: 30},
]
  }
  handleSubmit = product => {
    this.setState(prevState => ({
      foods: [...prevState.foods,  product ],
    }));
  };

  render() {
    return (
      <div>
        <List onSubmit={this.handleSubmit}/>
        <div>
          {this.state.foods.map(item => <Item key={item.id} item={item}/>)}
        </div>
      </div>
    )
  }
}
