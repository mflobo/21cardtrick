import React, { Component } from 'react'

class Card extends Component {

  render() {

    return (

      <div style={style.cardBox}>
        <img style={style.imageBox} src={this.props.image} />
      </div>

    )
  }
}

const style = {

  cardBox: {
    marginHorizontal: '10px',
    marginVertical: '20px'
  },

  imageBox: {
    width: '113px',
    height: '167px'
  }

}

export default Card