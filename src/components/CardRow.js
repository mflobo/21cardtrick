import React, { Component } from 'react'

import Card from './Card'

class CardRow extends Component {

  render() {

    return (

      <div style={style.rowBox}>
        {
          this.props.cards.length > 0 ? 
            <button onClick={()=> this.props.onSelect()}>My card is in this row</button>
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
  }

}

export default CardRow