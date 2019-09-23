import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    index: 0
  }

  updateIndex = () => {
    this.setState({
      index: this.state.index+4
    })
  }

  componentDidMount(){
    fetch("http://localhost:3000/sushis")
      .then(resp => resp.json())
      .then(this.sushisHandler)
  }

  sushisHandler = (data) => {
    this.setState({
      sushis: data
    })
  }

  render() {
    console.log("index of APP component: ", this.state.index)
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          index={this.state.index}
          updateIndex={this.updateIndex}
        />
        <Table />
      </div>
    );
  }
}

export default App;
