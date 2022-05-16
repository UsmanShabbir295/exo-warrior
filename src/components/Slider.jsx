import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import slide1 from "../images/bgContact.png";
import slide2 from "../images/111.jpg";
import slide3 from "../images/244.jpg";

export default function SliderCom() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box py={2}>
      <Slider {...settings}>
        <div
          style={{
            position: "relative",
            backgroundImage: `url(${slide1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            zIndex: 1,
            height: "500px",
            width: "1103px",
          }}
        >
          {/* <img height="500px" width="1103px" src={slide1} alt="" /> */}
          <Box display="flex" flexDirection="column">
            <Box
              position="absolute"
              right="10px"
              zIndex={10000}
              top="40%"
              fontSize="25px"
              fontWeight="bold"
              color="#ffffff"
            >
              TREASURY
            </Box>
            <Box fontSize="18px" color="#ffffff">
              Check it
            </Box>
          </Box>
        </div>
        <div>
          <img src={slide2} alt="" />
        </div>
        <div>
          <img src={slide2} alt="" />
        </div>
      </Slider>
    </Box>
  );
}
