import React, { useState, useEffect} from 'react'

const Recon = (props) => {
    const [recon, setRecon] = useState({
        race: '',
        summary: '',
        body: ''
    })

    useEffect(() => {
        
        fetch(`http://localhost:3001/recons/${1}`)
    }, [])

  return (
    <div>

    </div>
  )
}

export default Recon