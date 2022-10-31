import React, { useState } from 'react'

const ReconForm = (props) => {
    const [recon, setRecon] = useState({
        race: '',
        swim: '',
        bike: '',
        run: ''
    })


    const handleChange = (e) => {
        setRecon({
            ...recon, [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newRecon = {
            race: recon.race,
            swim: recon.swim,
            bike: recon.bike,
            run: recon.run
        }
        fetch('http://localhost:3001/recons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRecon)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            
            props.history.push('/recons');
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Race:</label>
        <input name="race" onChange={handleChange} type="text"/><br/>
        <label>Swim:</label>
        <textarea name="swim" onChange={handleChange} type="text"/><br/>
        <label>Bike:</label>
        <textarea name="bike" onChange={handleChange} type="text"/><br/>
        <label>Run:</label>
        <textarea name="run" onChange={handleChange} type="text"/><br/>
        <input type="submit"/>
    </form>
  )
}

export default ReconForm