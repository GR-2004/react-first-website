import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
    <>
        <div className="col-md-4 col-5 mx-auto">
          <div className="card">
            <img src={props.imgsrc} alt="" />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.text}</p>
              <NavLink to="/" className="btn btn-primary"> Get Started </NavLink>
            </div>
          </div>  
        </div>
    </>
  )
}

export default Card
