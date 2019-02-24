import axios from 'axios'

export const resetDeck = async () => {

  try {

    const { data } = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')

    return data

  } catch (error) {

    console.log(error)

  }

}

export const drawFromDeck = async ({ deck_id }) => {

  try {

    const { data } = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=21`)

    return data

  } catch (error) {

    console.log(error)

  }

}
