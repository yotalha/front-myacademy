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

export const userLoggedIn = (user) => {
  return{
    type: 'SIGNED_IN',
    payload: user
  }
}

export const userLoggedOut = () => {
  return{
    type: 'SINGED_OUT'
  }
}

