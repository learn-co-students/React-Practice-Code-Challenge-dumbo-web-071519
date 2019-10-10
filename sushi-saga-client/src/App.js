import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    startingIndex: 0,
    eatenSushi : [],
    wallet: 100
    
  }
  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({sushis:data}))
  }

  moreButtonClicked = () => {
    this.setState({startingIndex : this.state.startingIndex + 4})
  }
  
  eatenSushiYesNo = (sushi) => {
    return this.state.eatenSushi.includes(sushi)
  }
  
  fourMoresushis = () => {
    return this.state.sushis.slice(this.state.startingIndex, this.state.startingIndex + 4)
  }
  
  itemClicked = (sushi) => {
    console.log(sushi)
    if (this.state.wallet > sushi.price){
      this.setState({
        eatenSushi : [
          ...this.state.eatenSushi,
          sushi
        ],
        wallet : this.state.wallet - sushi.price})
    
    } else {
      alert('You dont have enough')
    }
    

  }
  
  
  
  render() {
    console.log(this.state.sushis)
    return (
      <div className="app">
        <SushiContainer sushis = {this.fourMoresushis()} eatenSushiYesNo = {this.eatenSushiYesNo} itemClicked = {this.itemClicked} moreButtonClicked = {this.moreButtonClicked} />
        <Table eatenSushi = {this.state.eatenSushi} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;