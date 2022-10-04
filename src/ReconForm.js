import React, { useState, useEffect, useCallback } from 'react'

const ReconForm = () => {
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