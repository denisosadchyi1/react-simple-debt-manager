import { ADD_DEBTOR, ADD_HISTORY_DEBT, PAY_OFF_DEBT } from "../actions/actionType"

const initalState = {
  debtorList: [],
  debtorHistoryList: [],
}

//Переписать reducer ?!

export const postReducer = (state = initalState, action) => {
  switch(action.type) {
    case ADD_DEBTOR:
      return {...state, debtorList: [...state.debtorList, action.payload ] }
    case ADD_HISTORY_DEBT:
        console.log(state.debtorList.filter(debt => debt.id === action.payload))
        return {...state, debtorHistoryList: [...state.debtorHistoryList, ...state.debtorList.filter(debt => debt.id === action.payload)]}
    case PAY_OFF_DEBT:
      return {...state, debtorList: state.debtorList.filter(debt => debt.id !== action.payload)}
    default: return state
  }
}