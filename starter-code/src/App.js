import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import food from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Input from './components/Input/Input';

class App extends Component {

  state = {
    list: food
  }

  handlerSearch = (e) => {
    this.setState({
      ...this.state,
      list: food.filter(elem => elem.name.toLowerCase().includes(e.target.value.toLowerCase()))
    })
  }

  handlerInput=(e)=>{
    let newState={
      ...this.state
    }
    debugger
    newState.list[e.target.attributes.idx.value].quantity=+e.target.value
    this.setState(newState)
  }


  render() {
    return (
      <div className='App'>

      <h1>IronNutrition</h1> 

        <Input placeholder="Search"  function={this.handlerSearch}/>

        <div className="box" > 
        {this.state.list.map((e,idx)=><FoodBox {...e} idx={idx} key={idx} function={this.handlerInput}/>)}
        </div>
      </div>
    );
  }
}

export default App;
