import React from 'react'

export const Layouts = (props) => {
  return (
    <>
      <header></header>
      <main>
        {props.children}
      </main>
      <footer></footer>
    </>
  )
}
