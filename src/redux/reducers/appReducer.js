const initialState = {
  modal: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {...state, modal: true}
    case 'HIDE_MODAL':
      return {...state, modal: false}
  
    default: return state;
  }
}