import React, { useState, useEffect } from 'react'

const Recons = () => {
    const [recons, setRecons] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/recons")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])

  return (
    <div>
        Recons
    </div>
  )
}

export default Recons