'use client'
import BannerTexts from "./BannerTexts";
import { Container } from "react-bootstrap";
import "./travelguide.scss";

import bohol from "../../images/homepage/bohol.jpg";
import mustbring from "../../images/homepage/mustbring.png";
import howtosurvive from "../../images/homepage/howtosurvive.png";
import ButtonComponent from "@/component/ButtonComponent/page";
import Image from "next/image";

//Current
const travelData = [
  {
    image: bohol,
    title: "Bohol Countryside Tour: The Best Tour for Bohol First-Timers",
    subtitle:
      "Known for its natural and cultural wonders, Bohol is a must-visit destination in the Philippines! Whether you’re a local or tourist,",
    date: "September 25, 2023",
    read: "6 mins read",
  },
  {
    image: mustbring,
    title: "Must-Bring Items for Your Next Island Hopping Adventure",
    subtitle:
      "The beauty of the Philippines is that it’s an archipelago. With over 7,000 islands, this Southeast Asian treasure...read more",
    date: "September 27, 2023",
    read: "6 mins read",
  },
  {
    image: howtosurvive,
    title: "How to Survive NAIA Immigration",
    subtitle:
      "As of September 3, 2023, the Inter-Agency Council Against Traffic (IACAT) revised departure rules for outbound Filipino citizens. All...read more beauty of the Philippines is that it’s an archipelago. With over 7,000 islands, this Southeast Asian treasure...read more",
    date: "September 27, 2023",
    read: "6 mins read",
  },
];
function TravelGuides() {
  return (
    <Container className="travel-guides-container">
      <BannerTexts
        titleclass="title-2"
        title="Travel Guides"
        subtitle="Looking for travel inspiration? Don't miss out on the latest travel updates, guides, and itineraries!"
      />

      <div className="travel-cards-container">
        {travelData.map((travel) => (
          <>
            <div className="travel-card">
              <div className="card-img">
                <Image src={travel.image} alt="" />
              </div>
              <div className="card-details">
                <h1>{travel.title}</h1>
                <p>{travel.subtitle}</p>
                <p>
                  {travel.date} . {travel.read}
                </p>
              </div>
            </div>

            <hr />
          </>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <ButtonComponent buttonText="Read More" className="default-btn" />
      </div>
    </Container>
  );
}

export default TravelGuides;
