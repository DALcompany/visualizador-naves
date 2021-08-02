import axios from 'axios'
import {
  PILOTS_SUCCESS,
  PILOTS_LOADING,
  PILOTS_ERROR
} from '../Types/pilotsTypes'

export const getPilotsName = () => async (dispatch) => {
  dispatch({
    type: PILOTS_LOADING
  })

  try {

    const res = await axios.get('https://swapi.dev/api/starships/')

    if (res.status === 200) {
      const { data } = res
      const spaceships = data.results.map((element, index) => element) // nuevo arreglo
     
      dispatch({
        type: PILOTS_SUCCESS,
        payload: spaceships
      })

    } else {
      dispatch({
        type: PILOTS_ERROR,
        payload: { error: res.status, message: 'Error al obtener naves' }
      })
    }

  } catch (error) {

    dispatch({
      type: PILOTS_ERROR,
      payload: false
    })
  }
}