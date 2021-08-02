import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import ListBox from './Components/ListBox'
import Card from './Components/Card'
import { connect } from 'react-redux'
import Title from './Components/Title'
import Item from './Components/Item'

import * as navesAction from '../Redux/Actions/navesAction'

// Estilos
import './assets/style/index.css'
import axios from 'axios'

const App = props => {

  const [state, setState] = useState({
    flag: false,
  })

  useEffect(() => {
    props.getSpaceships()
  }, [])

  const spaceshipsChange = (event) => {
    if (event.target.value !== '-1') {
      props.getDetailSpaceship(event.target.value)
      setState({
        ...state,
        flag: true
      })
    } else {
      setState({
        ...state,
        flag: false
      })
    }
  }

  const displayDetailSpaceship = () => {

    if (state.flag) {

      const { name, model, manufacturer, length, cost_in_credits, passengers } = props.detail

      return (
        <Card>
          <Title
            title={name}
            subtitle={model} />
          <Item title={'Fabricante'} subtitle={manufacturer} />
          <Item title={'Largo'} subtitle={`${length} fts.`} />
          <Item
            title={'Valor'}
            subtitle={
              cost_in_credits === 'unknown' ?
                'Desconocido' :
                `${cost_in_credits} créditos`
            } />
          <Item title={'Cantidad Pasajeros'} subtitle={passengers} />
        </Card>
      )
    }
  }

  const another = async (pilots) => {
    var data = ''
    for (const pilot of pilots) {
      data += await axios(pilot)
        .then(res => `<p align="center">${res.data.name}</p>`)
    }

    try {
      document.querySelector('#list-pilots').innerHTML = ''
      document.querySelector('#list-pilots').innerHTML = data
    } catch (error) { }
  }

  const displayDetailPassengers = () => {
    if (props.detail && state.flag) {

      const { pilots } = props.detail

      if (pilots.length !== 0) {

        another(pilots)

        return (
          <Card>
            <Title title={'Pasajeros'} />
            <div id='list-pilots'></div>
          </Card>
        )

      } else {
        return (
          <Card>
            <Title title={'Pasajeros'} subtitle={'No se encontrarón pasajeros'} />
          </Card>
        )
      }

    }
  }

  return (
    <main>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <ListBox
            onchange={spaceshipsChange}
            items={props.spaceships}
            reference={'name'}
            referenceId={'url'} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {displayDetailSpaceship()}
        </Grid>
        <Grid item xs={12} sm={6}>
          {displayDetailPassengers()}
        </Grid>
      </Grid>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    spaceships: state.navesReducer.spaceships,
    detail: state.naveDetailReducer.detail
  }
}

const mapDispatchToProps = {
  ...navesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)