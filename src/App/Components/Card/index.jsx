import React from 'react'

import './index.css'

const Card = props => {
  return (
    <div className='card__container'>
      {props.children}
    </div>
  )
}

export default Card
