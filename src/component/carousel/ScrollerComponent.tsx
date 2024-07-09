'use client'
import React from "react";
import { useEffect } from "react";
import slider1 from "../../images/homepage/slider1.png";
import slider2 from "../../images/homepage/slider2.png";
import slider3 from "../../images/homepage/slider3.png";
import "./slider.scss";
import Image from "next/image";

const ScrollerComponent = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(
          ".scroller__inner"
        ) as HTMLElement;
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="scroller w-full" data-direction="left" data-speed="fast">
      <div className="scroller__inner">
        <div className="scroller-img">
          <Image src={slider1} alt="" loading="lazy" />
        </div>
        <div className="scroller-img">
          <Image src={slider2} alt="" loading="lazy" />
        </div>
        <div className="scroller-img">
          <Image src={slider3} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default ScrollerComponent;
