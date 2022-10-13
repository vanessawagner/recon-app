import React, { useState } from 'react'

const ReconForm = (props) => {
    const [recon, setRecon] = useState({
        race: '',
        summary: '',
        body: ''
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
            summary: recon.summary,
            body: recon.body
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
            props.history.push('/recons')
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Race:</label>
        <input name="race" onChange={handleChange} type="text"/><br/>
        <label>Summary:</label>
        <textarea name="summary" onChange={handleChange} type="text"/><br/>
        <label>Body:</label>
        <textarea name="body" onChange={handleChange} type="text"/><br/>
        <input type="submit"/>
    </form>
  )
}

export default ReconForm