import React from 'react'
import styles from '../styles'
import ReactRouter, {Link} from 'react-router'

const Home = (props) => {
  let {transparentBg} = styles
  return (
    <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
      <h1>Github Battle</h1>
      <p className='lead'>
        Some text
      </p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>
          Get Started
        </button>
      </Link>
    </div>

  )
}

export default Home
