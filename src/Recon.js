import React, { useState, useEffect} from 'react'

const Recon = (props) => {
    const [recon, setRecon] = useState({
        race: '',
        summary: '',
        body: ''
    })

    useEffect(() => {
        
        fetch(`http://localhost:3001/recons/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
    }, [])

  return (
    <div>

    </div>
  )
}

export default Recon