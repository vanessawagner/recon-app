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
          setRecon(data)
        })
    }, [])

  return (
    <div>
      <h2>{recon.race}</h2>
      <br/>
      <h3>Summary: {recon.summary}</h3>
      <h3>Body: {recon.body}</h3>
    </div>
  )
}

export default Recon