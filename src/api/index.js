import axios from 'axios'

export const resetDeck = async () => {

  try {

    const { data } = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=21')

    return data

  } catch (error) {

    console.error()

  }

}
