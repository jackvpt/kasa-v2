import React from "react"
import "./About.scss"
import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import { useFetch } from "../../utils/useFetch"

export default function LayoutAbout() {
  // Fetch call returns 'data', 'isLoading' and 'error'
  const fetchResult = useFetch("/kasa_about.json")

  // Get data from fetch
  const abouts = fetchResult.data

  return (
    <React.Fragment>
      <Banner origin={"about"} />
      {abouts && (
        <section className="section__collapse">
          {abouts.map(
            // Iterate through about items
            ({ item, text }, index) => (
              <Collapse key={index} item={item} text={text} />
            )
          )}
        </section>
      )}
    </React.Fragment>
  )
}
