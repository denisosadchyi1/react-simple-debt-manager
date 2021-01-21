import { ADD_DEBTOR, ADD_HISTORY_DEBT, PAY_OFF_DEBT } from "./actionType"

export const addDebtor = (newDebtor) => {
  return {
    type: ADD_DEBTOR,
    payload: newDebtor
  }
}

export const payOffDebt = (id) => {
  return {
    type: PAY_OFF_DEBT,
    payload: id
  }
}

export const debtHistory = (id) => {
  return {
    type: ADD_HISTORY_DEBT,
    payload: id
  }
}