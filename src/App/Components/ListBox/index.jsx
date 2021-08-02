import React from 'react'
import {
  FormControl,
  Select
} from '@material-ui/core/'

const ListBox = props => {

  const { items, reference, referenceId, onchange } = props

  const displayItems = () => {
    return items.map((element, key) => (
      <option key={key} value={element[referenceId]}>{element[reference]}</option>
    ))
  }

  return (
    <FormControl variant='outlined' style={{width: '100%', background: 'white'}}>
      <Select
        native
        inputProps={{
          name: 'spaceships',
          id: 'outlined-spaceships-native-simple',
        }}
        onChange={onchange}>
        <option value='-1'>[Seleccione Nave]</option>
        {items !== false ?
          displayItems()
          : ''
        }
      </Select>
    </FormControl>
  )
}

export default ListBox

