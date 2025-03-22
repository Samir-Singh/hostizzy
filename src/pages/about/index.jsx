import React from "react";
import Layout from "../../layout";
import paymentImg from "../../assets/images/payment-protection.png";
import agent1Img from "../../assets/images/agent-1.jpg";
import agent2Img from "../../assets/images/agent-2.jpg";
import agent3Img from "../../assets/images/agent-3.jpg";
import agent4Img from "../../assets/images/agent-4.jpg";
import agent5Img from "../../assets/images/agent-5.jpg";
import property_img from "../../assets/images/shield.png";
import service_img from "../../assets/images/key.png";
import money_bag_img from "../../assets/images/money-bag.png";
import "./about.scss";
import SingleAgent from "./component/SingleAgent/SingleAgent";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import AnimatedCounters from "../../components/animatedCounters/animatedCounters";
import Newsletter from "../../components/newsletter/newsletter";
import { Helmet } from "react-helmet";
const AboutUs = () => {
  const agentsData = [
    {
      id: 1,
      img: agent1Img,
      name: "Arlene McCoy",
      proff: "Broker",
    },
    {
      id: 2,
      img: agent2Img,
      name: "Esther Howard",
      proff: "Broker",
    },
    {
      id: 3,
      img: agent3Img,
      name: "Cody Fisher",
      proff: "Broker",
    },
    {
      id: 4,
      img: agent4Img,
      name: "Bessie Cooper",
      proff: "Broker",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          About Hostizzy: Your Airbnb & Vacation Home Management Experts in
          India
        </title>
        <meta
          name="description"
          content="Dive into Hostizzy's journey as India's trusted Airbnb and vacation home management experts. Learn about our commitment to your success in the rental market."
        />
      </Helmet>
      <div class="about_main_div">
        <div class="about_bg_div">
          <div class="about_head_box">
            <p class="about_head">About Us</p>
            <p class="about_head_paragraph">
              Effortless Airbnb Management Simplified Airbnb and Vacation Rental
              Hosting: Elevate Your Property's Online Presence.
            </p>
          </div>
          {/* <p class="about_head2">Home / For Rent</p> */}
        </div>
        <div class="about_video">
          <video id="background-video" loop autoPlay>
            <source
              src={require("../../assets/bornfire.mp4")}
              type="video/mp4"
            />
          </video>
          <div class="video_description">
            <h3>
              Streamline Your Hosting with Experts in Airbnb and Vacation Rental
              Management
            </h3>
            <p>
              At Hostizzy™ Homes & Villas, we specialize in simplifying your
              hosting journey. As a leading Airbnb and vacation rental property
              management company in India, we manage all facets of short-term
              rentals across key platforms like Airbnb, Booking.com, and
              MakeMyTrip. Our full-service management approach takes the burden
              off your shoulders, from guest bookings and communications to
              impeccable cleaning and maintenance services. Let us enhance your
              property’s online visibility and ranking across multiple rental
              platforms.
            </p>
          </div>
        </div>
        <AnimatedCounters />
        <div class="about_section_two">
          <div class="section_two_left">
            <p class="left_para" align="justify">
              Are you tired of the time and effort it takes to manage your
              vacation rental property?
            </p>
            {/* <p class="left_para_two">manage your vacation rental property?</p> */}
          </div>
          <div class="section_two_right">
            <p class="right_para_one" align="justify">
              Managing a short-term rental property across multiple platforms
              like Airbnb, Booking.com, and Make My Trip can be time-consuming
              and challenging.
              <br /> <br /> Enter Hostizzy™ Homes & Villas, your professional
              property management partner. We take on the burdens of managing
              your property, from booking and guest communication to cleaning
              and maintenance. This leaves you free to enjoy the benefits of
              owning a vacation rental property, without the associated stress.
            </p>
            <p class="right_para_two" align="justify">
              Our focus is not just maximizing your earnings across various
              platforms, but also preserving and enhancing the value of your
              property. To achieve this, we leverage advanced technology and
              industry expertise to ensure your property is well-maintained,
              highly visible online, and consistently generating income.
              <br /> <br />
              Our management plans are customizable, tailored to your specific
              needs, offering you peace of mind that your property is in expert
              hands. Discover how we can help you optimize your return on
              investment for your short-term rental property. Contact us today!
            </p>

            {/* <div class="section_two_div">
            <div class="small_div">
              <div class="img_div">
                <img class="img" src={paymentImg} alt="img" />
              </div>
              <p class="img_head">Modern Farmhoses</p>
              <p class="img_para">
                Nullam sollicitudin blandit Nullam maximus.
              </p>
            </div>

            <div class="small_div">
              <div class="img_div">
                <img class="img" src={paymentImg} alt="img" />
              </div>
              <p class="img_head">Best Hospitality</p>
              <p class="img_para">
                Nullam sollicitudin blandit Nullam maximus.
              </p>
            </div>
          </div> */}
          </div>
        </div>
        <div class="about_section_three"></div>

        <div class="about_section_four">
          <h2 class="heading">Meet Our Team</h2>
          <h1 class="para">
            Meet Hostizzy: Transforming Vacation Rentals in India.
          </h1>

          <div class="section_four_img_collage">
            <div class="first_div">
              <div className="teamCard">
                <div className="imgBox">
                  <img src={require("../../assets/images/Founder.jpeg")} />
                </div>
                <div className="content">
                  <div className="details">
                    <h2>
                      Ethan Barman
                      <br />
                      <span>Founder</span>
                    </h2>
                    <div className="data">
                      <FaFacebookSquare style={{ fontSize: "24px" }} />
                      <FaInstagram style={{ fontSize: "24px" }} />
                      <FaLinkedin style={{ fontSize: "24px" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="teamCard">
                <div className="imgBox">
                  <img src={require("../../assets/images/Cofounder1.jpeg")} />
                </div>
                <div className="content">
                  <div className="details">
                    <h2>
                      Ashutosh Karn
                      <br />
                      <span>Co-Founder</span>
                    </h2>
                    <div className="data">
                      <FaFacebookSquare style={{ fontSize: "24px" }} />
                      <FaInstagram style={{ fontSize: "24px" }} />
                      <FaLinkedin style={{ fontSize: "24px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="first_div">
              <div className="teamCard2">
                <div className="imgBox2">
                  <img src={require("../../assets/images/Employee1.jpeg")} />
                </div>
                <div className="content">
                  <div className="details">
                    <h2>
                      Vikas Kumar
                      <br />
                      <span>Operations</span>
                    </h2>
                    <div className="data">
                      <FaFacebookSquare style={{ fontSize: "24px" }} />
                      <FaInstagram style={{ fontSize: "24px" }} />
                      <FaLinkedin style={{ fontSize: "24px" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="teamCard2">
                <div className="imgBox2">
                  <img src={require("../../assets/images/Employee4.jpg")} />
                </div>
                <div className="content">
                  <div className="details">
                    <h2>
                      Rishi Tripathi
                      <br />
                      <span>Operations</span>
                    </h2>
                    <div className="data">
                      <FaFacebookSquare style={{ fontSize: "24px" }} />
                      <FaInstagram style={{ fontSize: "24px" }} />
                      <FaLinkedin style={{ fontSize: "24px" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="teamCard2">
                <div className="imgBox2">
                  <img src={require("../../assets/images/Sahil_Khan.jpg")} />
                </div>
                <div className="content">
                  <div className="details">
                    <h2>
                      Sahil Chaudhary
                      <br />
                      <span>Operations</span>
                    </h2>
                    <div className="data">
                      <FaFacebookSquare style={{ fontSize: "24px" }} />
                      <FaInstagram style={{ fontSize: "24px" }} />
                      <FaLinkedin style={{ fontSize: "24px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="first_div">
              <div className="teamCard2">
                <div className="imgBox2">
                  <img src={require("../../assets/images/Deepak_Maurya.png")} />
                </div>
                <div className="content">
                  <div className="details">
                    <h2>
                      Deepak Maurya
                      <br />
                      <span>Social Media</span>
                    </h2>
                    <div className="data">
                      <FaFacebookSquare style={{ fontSize: "24px" }} />
                      <FaInstagram style={{ fontSize: "24px" }} />
                      <FaLinkedin style={{ fontSize: "24px" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="teamCard2">
                <div className="imgBox2">
                  <img
                    src={require("../../assets/images/Mayank_Gautam.jpeg")}
                  />
                </div>
                <div className="content">
                  <div className="details">
                    <h2>
                      Mayank Gautam
                      <br />
                      <span>Social Media</span>
                    </h2>
                    <div className="data">
                      <FaFacebookSquare style={{ fontSize: "24px" }} />
                      <FaInstagram style={{ fontSize: "24px" }} />
                      <FaLinkedin style={{ fontSize: "24px" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="teamCard2">
                <div className="imgBox2">
                  <img src={require("../../assets/images/Employee3.jpeg")} />
                </div>
                <div className="content">
                  <div className="details">
                    <h2>
                      Uditya Nain
                      <br />
                      <span>Socail Media</span>
                    </h2>
                    <div className="data">
                      <FaFacebookSquare style={{ fontSize: "24px" }} />
                      <FaInstagram style={{ fontSize: "24px" }} />
                      <FaLinkedin style={{ fontSize: "24px" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="teamCard2">
                <div className="imgBox2">
                  <img src={require("../../assets/images/Employee2.jpeg")} />
                </div>
                <div className="content">
                  <div className="details">
                    <h2>
                      Atul Sharma
                      <br />
                      <span>Social Media</span>
                    </h2>
                    <div className="data">
                      <FaFacebookSquare style={{ fontSize: "24px" }} />
                      <FaInstagram style={{ fontSize: "24px" }} />
                      <FaLinkedin style={{ fontSize: "24px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="second_div">
            <SingleAgent
              data={{
                id: 5,
                img: agent5Img,
                name: "Guy Hawkins",
                proff: "Broker",
              }}
            />
          </div> */}
          </div>
        </div>

        <div class="about_section_five">
          <div class="left_div">
            <div className="headingContainer">
              <h2 class="heading">OUR COMMITMENTS TO YOU</h2>
            </div>
            <div class="list_div_main">
              <div class="img_div">
                <img class="img" src={property_img} alt="img" />
              </div>
              <div class="content_div">
                <p class="heading">Quality</p>
                <p class="para">
                  {" "}
                  We pledge to deliver exceptional service that exceeds your
                  expectations.
                </p>
              </div>
            </div>

            <div class="list_div_main">
              <div class="img_div">
                <img class="img" src={service_img} alt="img" />
              </div>
              <div class="content_div">
                <p class="heading">Teamwork</p>
                <p class="para">
                  Our experienced team of professionals has the knowledge and
                  skills to manage and optimize your property effectively across
                  various short-term rental platforms.
                </p>
              </div>
            </div>

            <div class="list_div_main">
              <div class="img_div">
                <img class="img" src={money_bag_img} alt="img" />
              </div>
              <div class="content_div">
                <p class="heading">Innovative</p>
                <p class="para">
                  We harness the power of the latest technology to enhance your
                  property's online visibility and maximize revenue..
                </p>
              </div>
            </div>
            <div class="list_div_main">
              <div class="img_div">
                <img class="img" src={service_img} alt="img" />
              </div>
              <div class="content_div">
                <p class="heading">Safety</p>
                <p class="para">
                  Your property's safety and security are paramount to us. We
                  continually update and review our policies and procedures to
                  meet industry standards.
                </p>
              </div>
            </div>

            <div class="list_div_main">
              <div class="img_div">
                <img class="img" src={service_img} alt="img" />
              </div>
              <div class="content_div">
                <p class="heading">Hospitality</p>
                <p class="para">
                  From personalized check-ins to 24/7 guest support, we aim to
                  create memorable and comfortable experiences for every guest
                  who stays at our properties..
                </p>
              </div>
            </div>

            <div class="list_div_main">
              <div class="img_div">
                <img class="img" src={money_bag_img} alt="img" />
              </div>
              <div class="content_div">
                <p class="heading">Trust</p>
                <p class="para">
                  We take care of everything, so you can enjoy peace of mind.
                </p>
              </div>
            </div>
          </div>
          {/* <div class="left_div">

          
        <div class="list_div_main">
            <div class="img_div">
              <img class="img" src={service_img} alt="img" />
            </div>
            <div class="content_div">
              <p class="heading">Safety</p>
              <p class="para">Your property's safety and security are paramount to us. We continually update and review our policies and procedures to meet industry standards.</p>
                     </div>
          </div>

          <div class="list_div_main">
            <div class="img_div">
              <img class="img" src={service_img} alt="img" />
            </div>
            <div class="content_div">
              <p class="heading">Hospitality</p>
              <p class="para">From personalized check-ins to 24/7 guest support, we aim to create memorable and comfortable experiences for every guest who stays at our properties..</p>
            </div>
          </div>

          <div class="list_div_main">
            <div class="img_div">
              <img class="img" src={money_bag_img} alt="img" />
            </div>
            <div class="content_div">
              <p class="heading">Trust</p>
              <p class="para">We take care of everything, so you can enjoy peace of mind.</p>
            </div>
          </div>
        </div> */}
        </div>
        <Newsletter />
      </div>
    </>
  );
};

export default Layout(AboutUs);
