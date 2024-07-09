'use client'
import { Container } from "react-bootstrap";
import "./accreditations.scss";
import logo1 from "../../images/homepage/logo_1.png";
import logo2 from "../../images/homepage/logo_2.png";
import logo3 from "../../images/homepage/logo_3.png";
import logo4 from "../../images/homepage/logo_4.png";
import Image from "next/image";

function Accreditations() {
  return (
    <Container className="accreditations-container">
      <h1>Accreditations and Affiliations</h1>

      <div className="accreditations">
        <div className="logo">
          <Image src={logo1} alt="" />
        </div>
        <div className="logo">
          <Image src={logo2} alt="" />
        </div>
        <div className="logo3-img">
          <Image src={logo3} alt="" />
        </div>
        <div className="logo">
          <Image src={logo4} alt="" />
        </div>
      </div>
    </Container>
  );
}

export default Accreditations;
