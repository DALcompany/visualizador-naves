import { NAVES_SUCCESS, NAVES_LOADING, NAVES_ERROR } from '../Types/navesTypes'

const INITIAL_STATE = {
  spaceships: false,
  loading: false,
  error: false
}

const navesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAVES_SUCCESS:
      return {
        ...state,
        spaceships: action.payload,
        loading: false,
        error: false
      }
    case NAVES_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case NAVES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

export default navesReducer