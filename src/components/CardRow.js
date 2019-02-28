import React, { Component } from 'react'

import Card from './Card'

class CardRow extends Component {

  render() {

    return (

      <div style={style.rowBox}>
        {
          this.props.cards.length > 0 ? 
            <button style={style.rowButton} onClick={()=> this.props.onSelect()}>MY CARD IS<br></br>IN THIS ROW </button>
          : null
        }
        
        {
          this.props.cards.map(card => <Card image={card.image} />)
        }
      </div>

    )
  }
}

const style = {

  rowBox: {
    display: 'flex',
    flexDirection: 'row',
  },

  rowButton: {
    backgroundColor: 'whitesmoke',
    border: '2px gray',
    borderRadius: '5px',
    color: '#700000',
    fontFamily: 'Lucida Console',
    fontSize: '18px',
    padding: '15px',
    textAlign: 'center'
  }

}

export default CardRow