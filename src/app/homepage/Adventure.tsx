import { Button, Container } from "react-bootstrap";

// Adventures Learn More
import elnido from '../../images/homepage/el nido.jpg';
import boracay from '../../images/homepage/boracay.jpg';
import hongkong from '../../images/homepage/hongkong.jpg';
import bohol from '../../images/homepage/bohol.jpg';
import "./adventure.scss";
import ButtonComponent from "@/component/ButtonComponent/page";
import Link from "next/link";
import Image from "next/image";

const adventureData = [
  {
    image: elnido,
    title: "Escape to El Nido",
    description: "As low as ₱13,999",
    overlay: "Flight Package",
    link: "/elnidopage",
  },
  {
    image: boracay,
    title: "Experience Boracay!",
    overlay: "Flight Package",
    description: "As low as ₱10,999",
    link: "/elnidopage",
  },
  {
    image: hongkong,
    title: "Fly to Hong Kong",
    overlay: "Flight Package",
    description: "Buy 1, Get 1 for $205*",
    link: "/elnidopage",
  },
  {
    image: bohol,
    title: "Discover Bohol!",
    overlay: "Hotel Package",
    description: "As low as ₱13,660",
    link: "/elnidopage",
  },
];

function Adventure() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container className="adv-container">
      <div className="adv-cards-wrapper">
        {adventureData.map((adventure) => (
          <div className="adv-card">
            <Image src={adventure.image} alt={adventure.title} />
            <div className="adv-card-details">
              <h1> {adventure.title}</h1>
              <p> {adventure.description}</p>
            </div>
            <div className="adv-overlay">
              <p>{adventure.overlay}</p>
            </div>
            <Link
              href={adventure.link}
              onClick={scrollToTop}
              style={{ textDecoration: "none" }}
            >
              <ButtonComponent buttonText="Learn More" className="border-btn" />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Adventure;
