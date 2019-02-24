import React, { Component } from 'react';
import CardRow from './components/CardRow'
import Card from './components/Card'
import { resetDeck, drawFromDeck } from './api'
import './index.css'

class App extends Component {

  state = {
    cards: [[], [], []],
    selections: 0,
    result: null
  }

  resetCards() {
    console.log('resetCards called')
    resetDeck().then(
      data => {
        drawFromDeck({deck_id: data.deck_id}).then(
          data => {
            let cards = data.cards
            this.setState({
              cards: [cards.splice(0, 7), cards.splice(0, 7), cards],
              selections: 0,
              result: null
            })
          }
        )
    })
  }

  selectRow(rowNum) {
    let midTrickStack = []
    if (rowNum == 0) { 
      midTrickStack = [...this.state.cards[1],...this.state.cards[0],...this.state.cards[2]]
    } else if (rowNum == 1) {
      midTrickStack = [...this.state.cards[0],...this.state.cards[1],...this.state.cards[2]]
    } else {
      midTrickStack = [...this.state.cards[1],...this.state.cards[2],...this.state.cards[0]]
    }
    if (this.state.selections > 1) {
      this.setState({
        selections: 3,
        result: midTrickStack[10]
      })
    } else {
      this.setState({
        selections: this.state.selections + 1,
        cards: [
          [midTrickStack[0],midTrickStack[3],midTrickStack[6],midTrickStack[9],midTrickStack[12],midTrickStack[15],midTrickStack[18]],
          [midTrickStack[1],midTrickStack[4],midTrickStack[7],midTrickStack[10],midTrickStack[13],midTrickStack[16],midTrickStack[19]],
          [midTrickStack[2],midTrickStack[5],midTrickStack[8],midTrickStack[11],midTrickStack[14],midTrickStack[17],midTrickStack[20]]
        ]
      })
    }
  }

  render() {
    console.log(this.state)
    const selectRow = this.selectRow.bind(this)
    return (
      <div className="innerDiv">
        <button onClick={()=>this.resetCards()} className="mainButton" >Start or Reset Trick</button> 
        {
          this.state.result ? 
            <Card image={this.state.result.image} />
          :
            <div>
              <CardRow cards={this.state.cards[0]} onSelect={()=>selectRow(0)} />
              <CardRow cards={this.state.cards[1]} onSelect={()=>selectRow(1)} />
              <CardRow cards={this.state.cards[2]} onSelect={()=>selectRow(2)} />
            </div>
        }
      </div>
    );
  }
}

export default App;
