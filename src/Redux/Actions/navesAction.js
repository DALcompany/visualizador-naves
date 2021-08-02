import axios from 'axios'
import {
  NAVES_SUCCESS,
  NAVES_LOADING,
  NAVES_ERROR,
  NAVES_DETAIL_SUCCESS,
  NAVES_DETAIL_LOADING,
  NAVES_DETAIL_ERROR
} from '../Types/navesTypes'

// OBTENER NAVES

export const getSpaceships = () => async (dispatch) => {
  dispatch({
    type: NAVES_LOADING
  })

  try {

    const res = await axios.get('https://swapi.dev/api/starships/')

    if (res.status === 200) {
      const { data } = res
      const spaceships = data.results.map((element, index) => element) // nuevo arreglo
     
      dispatch({
        type: NAVES_SUCCESS,
        payload: spaceships
      })

    } else {
      dispatch({
        type: NAVES_ERROR,
        payload: { error: res.status, message: 'Error al obtener naves' }
      })
    }

  } catch (error) {

    dispatch({
      type: NAVES_ERROR,
      payload: false
    })
  }
}

// OBTENER DETALLES DE LA NAVE

export const getDetailSpaceship = (url) => async (dispatch) => {
  dispatch({
    type: NAVES_DETAIL_LOADING
  })

  try {

    const res = await axios.get(url)

    if (res.status === 200) {
      const { data } = res

      dispatch({
        type: NAVES_DETAIL_SUCCESS,
        payload: data
      })

    } else {
      dispatch({
        type: NAVES_DETAIL_ERROR,
        payload: { Error: res.status, Message: 'Error al obtener detalles de la nave' }
      })
    }

  } catch (error) {

    dispatch({
      type: NAVES_DETAIL_ERROR,
      payload: false
    })
  }
}