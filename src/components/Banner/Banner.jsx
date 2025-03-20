import imgSource1 from "../../assets/images/img_source_1.jpg"
import imgSource2 from "../../assets/images/img_source_2.jpg"
import "./Banner.scss"

export default function Banner({ origin }) {
  let [imgsource, style] = ""

  // 2 possible origins: 'home' (with text) and 'about' (without text)
  switch (origin) {
    case "home":
      imgsource = imgSource1
      style = "container__banner-home"
      break
    case "about":
      imgsource = imgSource2
      style = "container__banner-about"
      break
    default:
      imgsource = imgSource1
  }
  return (
    <section className="container__banner">
      <div className={style}>
        <img src={imgsource} alt="paysage"></img>
        {/* Image is different according to origin */}
        {origin === "home" && (
          <h2>
            Chez vous,
            <span className="span__crlf">
              <br />
            </span>{" "}
            partout et ailleurs
          </h2>
        )}
        {/* No text if origin is 'about' */}
      </div>
    </section>
  )
}
