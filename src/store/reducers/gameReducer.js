const initialState = {
    money: null
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_SUCESS':
          console.log('data update sucess')
        return {
          ...state,
          money: action.money
        };
        case 'UPDATE_ERROR':
          console.log('data update failed')
        return {
          ...state,
          money: null
        };
      default:
        return state;
    }
  }

export default gameReducer