import React, { useState, useEffect} from 'react'

const Recon = (props) => {
    const [recon, setRecon] = useState({
        race: '',
        swim: '',
        bike: '',
        run: ''
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
      <h3>Swim: {recon.swim}</h3>
      <h3>Bike: {recon.bike}</h3>
      <h3>Run: {recon.run}</h3>
    </div>
  )
}

export default Recon