import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    currentSushi: [],
    eatenSushis: [],
    currentRow: 1,
    wallet: 100
  }
  eatenYesNo = (sushi) => {
    return this.state.eatenSushis.includes(sushi)
  }

  moreSushis = () => {
    let nextSushiRow = this.state.sushis.slice(this.state.currentRow * 4, (this.state.currentRow + 1) * 4)
    this.setState({
      currentRow: this.state.currentRow + 1,
      currentSushi: nextSushiRow
    })
  }

  eatThisSushi = (sushi) => {
    if (this.state.wallet < sushi.price){
      alert("You don't have enough!")
      return
    }
    this.setState({
      eatenSushis: [
        ...this.state.eatenSushis,
        sushi
      ],
      wallet: this.state.wallet - sushi.price
    })
  }
  //# always put your fetch requests here 
  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(fetchedSushis => {
      this.setState({
        sushis: fetchedSushis,
        currentSushi: fetchedSushis.filter(sushi => sushi.id<5)
        
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.currentSushi} eatenYesNo={this.eatenYesNo} moreSushis={this.moreSushis} eatThisSushi={this.eatThisSushi}/>
        <Table wallet={this.state.wallet} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;