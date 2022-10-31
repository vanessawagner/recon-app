import React, { useState, useEffect } from 'react'
import NewButton from './NewButton'
import ReconLink from './ReconLink'

const Recons = () => {
    const [recons, setRecons] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/recons")
        .then(res => res.json())
        .then(data => {
            console.log("recons", data)
            setRecons(data)
        })
    }, [])

     const reconsList = recons.map(r => <ReconLink recon={r}/>)
    //const reconsList = recons.map(r => <li>{r.race}</li>)

  return (
    <div>
        <h3>My Race Recons</h3>
        <hr/>
        {reconsList}
        <br/>
        <br/>
        <NewButton />
    </div>
  )
}

export default Recons