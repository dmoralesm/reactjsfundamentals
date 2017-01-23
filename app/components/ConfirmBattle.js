import React from 'react'

const ConfirmBattle = (props) => {
  return props.isLoading
    ? <p>LOADING!</p>
    : <p>CONFIRM BATTLE! {pr(props)}</p>
}

const pr = (object) => <pre>{JSON.stringify(object, null, ' ')}</pre>

export default ConfirmBattle
