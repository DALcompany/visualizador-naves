import {
  PILOTS_SUCCESS,
  PILOTS_LOADING,
  PILOTS_ERROR
} from '../Types/pilotsTypes'

const INITIAL_STATE = {
  pilots: false,
  loading: false,
  error: false
}

const pilotsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PILOTS_SUCCESS:
      return {
        ...state,
        pilots: action.payload,
        loading: false,
        error: false
      }
    case PILOTS_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case PILOTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

export default pilotsReducer