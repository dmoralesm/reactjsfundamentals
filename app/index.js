import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = (props) => {
  return (
    <h1>Hello world.</h1>
  )
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
)
