import { HIDE_MODAL, SHOW_MODAL } from "./actionType"

const showModal = () => {
  return {
    type: SHOW_MODAL
  }
}
const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
}