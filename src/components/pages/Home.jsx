import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Feature = ({ heading, content, imageSrc, revealFrom }) => (
  <div className={`feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone`}>
    <div className={`featured-image-container ipsGrid_span5 gs_reveal ${revealFrom}`}>
      <div className="card">
        <img width="479" src={imageSrc} alt="" />
      </div>
    </div>

    <div className="ipsGrid_span7 ipsType_left">
      <h2 className="heading_large gs_reveal">{heading}</h2>
      <p className="gs_reveal">{content}</p>
    </div>
  </div>
);

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        markers: true,
        onEnter: function () {
          animateFrom(elem);
        },
        onEnterBack: function () {
          animateFrom(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        }, // assure that the element is hidden when scrolled out of view
      });
    });
  }, []);

  const animateFrom = (elem, direction = 1) => {
    direction = direction || 1;
    let x = 0,
      y = direction * 250;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -250;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 250;
      y = 0;
    }
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = "1";
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 2.25,
        x: 50,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  };

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  return (
    <div className="cInnerContent">
      <h1 className="header-section gs_reveal ipsType_center">
        Scroll down and up to see different reveal animations
      </h1>

      <div className="features">
        {/* Feature components here */}
        <Feature
          heading="Create amazing SVG animations"
          content="DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path."
          imageSrc="https://picsum.photos/479/479?index=1"
          revealFrom="gs_reveal_fromLeft"
        />
        <Feature
          heading="Create amazing SVG animations"
          content="DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path."
          imageSrc="https://picsum.photos/479/479?index=1"
          revealFrom="gs_reveal_fromLeft"
        />
        <Feature
          heading="Create amazing SVG animations"
          content="DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path."
          imageSrc="https://picsum.photos/479/479?index=1"
          revealFrom="gs_reveal_fromLeft"
        />
        <Feature
          heading="Create amazing SVG animations"
          content="DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path."
          imageSrc="https://picsum.photos/479/479?index=1"
          revealFrom="gs_reveal_fromLeft"
        />
        <Feature
          heading="Create amazing SVG animations"
          content="DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path."
          imageSrc="https://picsum.photos/479/479?index=1"
          revealFrom="gs_reveal_fromLeft"
        />
        <Feature
          heading="Create amazing SVG animations"
          content="DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path."
          imageSrc="https://picsum.photos/479/479?index=1"
          revealFrom="gs_reveal_fromLeft"
        />
        <Feature
          heading="Create amazing SVG animations"
          content="DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path."
          imageSrc="https://picsum.photos/479/479?index=1"
          revealFrom="gs_reveal_fromLeft"
        />
        <Feature
          heading="Create amazing SVG animations"
          content="DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path."
          imageSrc="https://picsum.photos/479/479?index=1"
          revealFrom="gs_reveal_fromLeft"
        />
        <Feature
          heading="Create amazing SVG animations"
          content="DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path."
          imageSrc="https://picsum.photos/479/479?index=1"
          revealFrom="gs_reveal_fromLeft"
        />
        <Feature
          heading="Create amazing SVG animations"
          content="DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path."
          imageSrc="https://picsum.photos/479/479?index=1"
          revealFrom="gs_reveal_fromLeft"
        />
        <Feature
          heading="Create amazing SVG animations"
          content="DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path."
          imageSrc="https://picsum.photos/479/479?index=1"
          revealFrom="gs_reveal_fromLeft"
        />
        <Feature
          heading="Create amazing SVG animations"
          content="DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path."
          imageSrc="https://picsum.photos/479/479?index=1"
          revealFrom="gs_reveal_fromLeft"
        />


        {/* More Feature components here */}
      </div>
    </div>
  );
};

export default Home;
