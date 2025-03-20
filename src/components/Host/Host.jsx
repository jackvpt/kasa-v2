import React from "react"
import "./Host.scss"

export default function Host({ name, picture }) {
  return (
    <React.Fragment>
      <div className="container__host">
        <p className="container__host__name">
          {name}
        </p>
        <div className="container__host__picture">
          <img src={picture} alt={name} width="64" height="64"></img>
        </div>
      </div>
    </React.Fragment>
  )
}
