import "./Footer.scss"
import logo from "../../assets/images/logo_kasa_white.png"

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo kasa"></img>
      <p>
        © 2020 Kasa. All{" "}
        <span className="span__crlf">
          <br />
        </span>{" "}
        rights reserved
      </p>
    </footer>
  )
}
