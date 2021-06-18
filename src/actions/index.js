export const increment = () => {
  return{
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return{
    type: 'DECREMENT'
  }
}

export const incrementByAmount = (amount) => {
  return{
    type: 'INCREMENT_BY_AMOUNT',
    payload: amount
  }
}

export const decrementByAmount = (amount) => {
  return{
    type: 'DECREMENT_BY_AMOUNT',
    payload: amount
  }
}