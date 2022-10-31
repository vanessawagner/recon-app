import React from 'react'
import { Link } from 'react-router-dom'

const ReconLink = ({recon}) => {
  return (
    <>
      <Link to={`/recons/${recon.id}`}>
          {recon.race}
      </Link>
      <br/>
    </>
  )
}

export default ReconLink