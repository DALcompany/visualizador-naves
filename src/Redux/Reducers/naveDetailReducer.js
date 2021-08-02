import { NAVES_DETAIL_SUCCESS, NAVES_DETAIL_LOADING, NAVES_DETAIL_ERROR } from '../Types/navesTypes'

const INITIAL_STATE = {
  detail: false,
  loading: false,
  error: false
}

const naveDetailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAVES_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.payload,
        loading: false,
        error: false
      }
    case NAVES_DETAIL_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case NAVES_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

export default naveDetailReducer