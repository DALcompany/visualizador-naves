import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  container: {
    fontFamily: 'Arial',
    borderBottom: '1px solid black',
    padding: '10px 0px'
  },
  title: {
    margin: 0,
    fontSize: '20pt',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: '11pt',
  }
})

const Title = props => {

  const classes = useStyle()

  return (
    <div className={classes.container}>
      <p className={classes.title}>{props.title ? props.title : ''}</p>
      <span className={classes.subtitle}>{props.subtitle ? props.subtitle : ''}</span>
    </div>
  )
}

export default Title
