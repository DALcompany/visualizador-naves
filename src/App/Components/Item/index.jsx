import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  container: {
    fontFamily: 'Arial',
    padding: '10px 0px'
  },
  title: {
    margin: 0,
    fontSize: '16pt',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: '11pt',
  }
})

const Item = props => {

  const classes = useStyle()

  return (
    <div className={classes.container}>
      <p className={classes.title}>{props.title ? props.title : ''}</p>
      <span className={classes.subtitle}>{props.subtitle ? props.subtitle : ''}</span>
    </div>
  )
}

export default Item
