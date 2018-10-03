import React from "react";
import Carousel from "nuka-carousel";

import PagingDots from "./PagingDots";
import IMG1 from "./images/img-socks-1_2x.png";
import IMG2 from "./images/img-socks-2_2x_grande.png";
import IMG3 from "./images/img-socks-3_2x_grande.png";

const SinglePageSlider = () => (
  <div className="SinglePageSlider">
    <Carousel
      heightMode="first"
      renderBottomCenterControls={props => <PagingDots {...props} />}
    >
      <div className="carousel-itemx">
        <img className="d-block" src={IMG1} alt="Second slide" />
      </div>
      <div className="carousel-itemx">
        <img className="d-block" src={IMG2} alt="Second slide" />
      </div>
      <div className="carousel-itemx">
        <img className="d-block" src={IMG3} alt="Second slide" />
      </div>
    </Carousel>
  </div>
);

export default SinglePageSlider;
