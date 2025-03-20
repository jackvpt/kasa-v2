import React from "react"
import { Link } from "react-router-dom"
import "./Home.scss"
import Banner from "../../components/Banner/Banner.jsx"
import Card from "../../components/Card/Card.jsx"
import { useFetch } from "../../utils/useFetch.jsx"

export default function Home() {
  // Fetch call returns 'data', 'isLoading' and 'error'
  const fetchResult = useFetch("/kasa_accomodations.json")

  // Get data from fetch
  const accomodations = fetchResult.data

  return (
    <React.Fragment>
      <Banner origin={"home"} />
      {accomodations && ( // Check if accomodations is not empty
        <section className="container__main">
          <div className="container__cards">
            {accomodations.map(
              (
                { id, title, cover } // Iterate through accomodations
              ) => (
                <Link key={id} to={`/accomodation/${id}`}>
                  <Card title={title} cover={cover} />
                </Link>
              )
            )}
          </div>
        </section>
      )}
    </React.Fragment>
  )
}
