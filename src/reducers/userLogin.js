const userLogin = (state = {}, action) => {
  switch(action.type){
    case 'SIGNED_IN':
      return state = action.payload;
    case 'SIGNED_OUT':
      return state = {};
    default:
      return state;
  }
}

export default userLogin;