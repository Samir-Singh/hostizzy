import React from "react";
import styled from "styled-components";
import "./index.css";
const TestimonialCard = ({ data }) => {
  return (
    <Container className="project">
      <div className="testimonial-para">
        <p align="start">{data?.text}</p>
      </div>
      <div className="avatar-name-container">
        <div className="testimonial-avatar-name-container">
          <div className="testimonial-avatar">
            {" "}
            <img
              src={data?.avatar}
              height={"100%"}
              width={"100%"}
              style={{ borderRadius: "50%" }}
            />
          </div>

          <div className="testimonial-avatar-text">
            <p>{data?.name}</p>
            <p>{data.time}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialCard;

const Container = styled.div`
  ${"" /* height: 25vh; */}
  background-color: white;
  margin: 0 0.5rem;
  padding: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  backdrop-filter: blur(8px);
  //   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    background: white;
    transition: all 400ms ease-in-out;
    p {
      color: "#000";
    }
  }
`;
