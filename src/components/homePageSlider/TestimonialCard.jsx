import React from "react";
import styled from "styled-components";
import "./index.css"
import leaf1 from "../../assets/leaf1.png"
import leaf2 from "../../assets/leaf2.png"
import leaf3 from "../../assets/leaf3.png"
import leaf4 from "../../assets/leaf4.png"
const TestimonialCard = ({ data, image }) => {
  return (


    <div className="home-slider-image-main">
      <img src={data?.avatar} className="home-slider-image" />
   
        <div className="leaf leaf-one">
          <img src={leaf1} alt="" />
        </div>


        <div className="leaf leaf-two">
          <img src={leaf2} alt="" />
        </div>

        <div className="leaf leaf-three">
          <img src={leaf4} alt="" />
        </div>
        <h1 className="textset2">
        <span className="text-r">I</span>
        <span className="text-e">Z</span>
        <span className="text-f">Z</span>
        <span className="text-g">Y</span>
      </h1>

    </div>

  );
};

export default TestimonialCard;

// const Container = styled.div`
//   // height: 65vh;
//   background-color: white;
//   // margin: 0 0.5rem; 
//   // padding: 1.5rem;
//   width:"100%"
//   // border-radius: 4px;
//   cursor: pointer;
//   position: relative;
//   width:100%;
//   overflow: hidden;
//   // border:1px solid #ccc;
//   // backdrop-filter: blur(8px);
// //   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
// border:1px solid red;
// border-radius:16px;
//   .disc {
//     position: absolute;
//     right: 0;
//     left: 0;
//     bottom: -10rem;
//     text-align: left;
//     padding: 0.5rem;
//     background: white;
//     transition: all 400ms ease-in-out;
//     p{
//         color:"#000"
//     }
//   }
// `;