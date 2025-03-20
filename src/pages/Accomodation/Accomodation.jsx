import React from "react"
import { useParams, Navigate } from "react-router-dom"
import "./Accomodation.scss"
import Tag from "../../components/Tag/Tag.jsx"
import Collapse from "../../components/Collapse/Collapse.jsx"
import Carrousel from "../../components/Carrousel/Carrousel.jsx"
import Host from "../../components/Host/Host.jsx"
import Rating from "../../components/Rating/Rating.jsx"
import { useFetch } from "../../utils/useFetch.jsx"

export default function Accomodation() {
  // Get id from Home page
  const parameters = useParams()

  // Fetch call returns 'data', 'isLoading' and 'error'
  const fetchResult = useFetch("/kasa_accomodations.json")

  // Check if fetch isLoading or if error
  if (fetchResult.isLoading || !fetchResult.data) {
    return
  }

  // Get data from fetch
  const accomodations = fetchResult.data
  let accomodation

  // Get accomodation based on id
  if (accomodations) {
    accomodation = accomodations.find((element) => element.id === parameters.id)
  }

  if (!accomodation) {
    return <Navigate to="*" /> // Navigate to Error page
  }

  return (
    <section className="container__main">
      <Carrousel props={accomodation} />
      <div className="container__location-tags-host-rating">
        <div className="container__location-tags">
          <div className="container__location-tags__location">
            <h2>{accomodation.title}</h2>
            <h3>{accomodation.location}</h3>
          </div>
          <div className="container__location-tags__tags">
            {accomodation.tags.map(
              (
                tagName,
                index // Iterate through tags
              ) => (
                <Tag key={index} tagName={tagName} />
              )
            )}
          </div>
        </div>

        <div className="container__tags-rating">
          <Host
            name={accomodation.host.name}
            picture={accomodation.host.picture}
          />
          <Rating rate={accomodation.rating} maxRate={5} />
        </div>
      </div>

      <div className="container__details">
        <div className="details__description">
          <Collapse item="Description" text={accomodation.description} />
        </div>
        <div className="details__description">
          <Collapse item="Equipements" text={accomodation.equipments} />
        </div>
      </div>
    </section>
  )
}
