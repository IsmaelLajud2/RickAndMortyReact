import React from 'react'
import '../components/CardStyles.css'
const CardCharacters = ({infoCharacters}) => {
 
  return (
    <>
    
<div className="custom-card">
      <img src={infoCharacters.image}  className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{infoCharacters.name}</h2>
        <p className="card-description">{infoCharacters.status}</p>

        <p className="card-description">{infoCharacters.species}</p>
      </div>
    </div>
  

    </>
  )
}

export default CardCharacters