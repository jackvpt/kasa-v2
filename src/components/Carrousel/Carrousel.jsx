import { useState } from "react"
import "./Carrousel.scss"
import arrow_back from "../../assets/images/arrow_back.png"
import arrow_forward from "../../assets/images/arrow_forward.png"

export default function Carrousel({ props }) {
  const [pictureDisplayed, setPictureDisplayed] = useState(0)
  const numberOfPictures = props.pictures.length

  function pictureBack() {
    // If first picture is displayed and back button is clicked, picture displayed is last one
    pictureDisplayed - 1 < 0
      ? setPictureDisplayed(numberOfPictures - 1)
      : setPictureDisplayed(pictureDisplayed - 1)
  }

  // If last picture is displayed and next button is clicked, picture displayed is first one
  function pictureForward() {
    pictureDisplayed + 1 >= numberOfPictures
      ? setPictureDisplayed(0)
      : setPictureDisplayed(pictureDisplayed + 1)
  }

  return (
    <div className="container__carrousel">
      <div className="carousel-slider" style={{ transform: `translateX(-${pictureDisplayed * 100}%)` }}>
        {props.pictures.map((image, index) => (
          <div className="carousel-slide" key={index}>
            <img className="accomodationPicture" src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      {/* Display arrows and picture number only if number of pictures > 1 */}
      {numberOfPictures > 1 && (
        <div>
          <img
            className="picture__arrow_back"
            src={arrow_back}
            alt="précédent"
            onClick={pictureBack}
          ></img>
          <img
            className="picture__arrow_forward"
            src={arrow_forward}
            alt="suivante"
            onClick={pictureForward}
          ></img>
          <p className="picture__number">
            {pictureDisplayed + 1}/{numberOfPictures}
          </p>
        </div>
      )}
    </div>
  )
}
