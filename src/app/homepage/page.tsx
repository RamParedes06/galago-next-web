'use client'
import React, { useEffect, useState } from "react";
import "./homepage.scss";
import NavigationBar from "@/component/navigationbar/page";
// import NavigationBar from "../components/ui/NavigationBar";
import { Tab, Tabs, Container, Nav, Button } from "react-bootstrap";
import { Airplane } from "@/ui/svg/Airplane";
import { Hotel } from "@/ui/svg/Hotel";
import BannerTexts from "./BannerTexts";
import Adventure from "./Adventure";
import ScrollerComponent from "@/component/carousel/ScrollerComponent";
import TravelGuides from "./TravelGuide";
import Image from "next/image";
// import Flights from "../components/homepage/Flights";
// import BannerTexts from "../components/homepage/BannerTexts";
// import Adventure from "../components/homepage/Adventure";
import phoneicon from "../../images/homepage/galago-logo-phone.png";
import Accreditations from "./Accreditation";
// import TravelGuides from "../components/homepage/TravelGuides";
// import Accreditations from "../components/homepage/Accreditations";
// import ScrollerComponent from "../components/homepage/slider/ScrollerComponent";
// import FooterComponent from "../components/ui/FooterComponent";
// import Hotels from "../components/homepage/Hotels";
// import { Airplane } from "../components/ui/svg/Airplane";
// import { Hotel } from "../components/ui/svg/Hotel";
// import axios from "axios";
// import ApiRoute from "../apiRoutes";
const Homepage = () => {
  // let airports = [];


 

  const [activeTab, setActiveTab] = useState("flights");

  const handleTabSelect = (eventKey: any) => {
    setActiveTab(eventKey);
  };
  return (
    <div>
      <NavigationBar />

      {/* Hero Section  */}
      <div className="hero-section">
        <div className="hero-details">
          <h1>Get ready to GO!</h1>
          <p className="body-medium">
            Trot the globe or discover the beauty of the Philippines <br />
            islands. Your next adventure starts here!
            {/* {airports?.tag.map((value:any, index: React.Key) => {
            {/* {airports?.tag.map((value:any, index: React.Key) => {
              
              return (
                <p key={index}>{value.airportName}</p>
              )
            })} */}
          </p>
        </div>
      </div>
      <Container className="hero-tab-container">
        <Tabs
          defaultActiveKey="flights"
          className="mb-3 custom-tabs"
          onSelect={handleTabSelect}
          // fill
        >
          <Tab
            eventKey="flights"
            title={
              <span className="d-flex align-items-center justify-content-center gap-2">
                <Airplane
                  _color={activeTab == "flights" ? "#016e7f" : "#333333"}
                />
                <p>Flights </p>
              </span>
            }
            className="flights-tab"
          >
            {/* <Flights /> */}
          </Tab>
          <Tab
            eventKey="hotels"
            title={
              <span className="d-flex align-items-center justify-content-center gap-2">
                <Hotel _color={activeTab == "hotels" ? "#016e7f" : "#333333"} />
                <p>Hotels</p>
              </span>
            }
            className="hotels-tab"
          >
            {/* <Hotels /> */}
          </Tab>
        </Tabs>
      </Container>

      {/* Adventure  */}
      <div className="adventure-container">
        <BannerTexts
          titleclass="title"
          title="Go on an adventure!"
          subtitle="Ready to explore the Philippines and the world? Check out our latest travel promos!"
        />
        <Adventure />
      </div>

      {/* Middle Section Banner  */}
      <div className="middle-section">
        <div className="banner-one">
          <p>
            "Unforgettable experiences crafted for you by an <br />
            all-Filipino team of travel experts."
          </p>
        </div>
        <div className="banner-two"></div>
        <div className="banner-three">
          <div className="banner-three-img">
            {/* <Image src={phoneicon} alt="" width={300} height={300}/> */}
          </div>
          <div className="banner-three-details">
            <h1>Get ready for GalaGO!</h1>
            <p>Stay tuned for the GalaGO! app coming soon in 2024!</p>
          </div>
        </div>
      </div>

      {/* Travel Guides  */}

      <TravelGuides />
      <Accreditations />

      {/* Slider  */}
      <div className="swipper-container">
        <h1>Discover the best of the Philippines and beyond!</h1>
        <ScrollerComponent />
      </div>

      {/* Footer  */}
      {/* <FooterComponent /> */}
    </div>
  );
};

export default Homepage;
