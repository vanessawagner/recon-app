import React, { useState, useEffect } from 'react'

const Recons = () => {
    const [recons, setRecons] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/recons")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRecons(data)
        })
    }, [])

    const reconsList = recons.map(r => <li>{r.stuff}</li>)
 

  return (
    <div>
        <h3>My Race Recons</h3>
        <hr/>
        {reconsList}
        <br/>
    </div>
  )
}

export default Recons