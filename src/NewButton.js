import React from 'react'
import { Link } from 'react-router-dom'

const NewButton = () => {
  return (
    <Link to={'recons/new'}>
        <button>Click the button to start a new Race Recon!</button>
    </Link>
  )
}

export default NewButton