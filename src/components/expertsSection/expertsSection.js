import React from 'react'
import "./expertsSection.scss"
import { FaShieldAlt,FaPeopleCarry,FaServicestack,FaChartLine} from 'react-icons/fa';
import imfg from "../../assets/images/first.gif"
const ExpertsSection = () => {
  return (
//     <div classNameName='expertMainSection'>
//       <div classNameName='expertMainCard'>

// <p align="justify">

// When you entrust us with your property, you're guaranteed total transparency. We share all essential information, from guest booking details to your monthly reports. Our meticulous screening process ensures only the most trustworthy guests stay in your property.
// </p>
//       </div>
//       <div classNameName='expertMainCard'>

// <p align="justify">
// Our management plans cater to the unique needs of hosts and property owners across various booking platforms. Our competitive commission rate allows you to retain more from each booking. At Hostizzy™ Homes & Villas, we believe in sharing the comfort, charm, and unique value of your home with guests from around the world.</p>
//       </div>
//       <div classNameName='expertMainCard'>

// <p align="justify">
// We treat your property as our own, ensuring your guests enjoy a 5-star hotel level of service in the comfort of your home. For the exclusive properties we manage, we provide a full suite of hospitality services, including top-notch housekeeping, premium toiletries, fresh linens & laundry, and unique dining experiences.</p>
//       </div>
//       <div classNameName='expertMainCard'>

// <p align="justify">
// We leverage data-driven strategies to optimize your listings, enhancing your visibility on multiple short-term rental platforms and attracting a larger pool of potential guests. With your property's high-quality images and our compelling descriptions, your listings will stand out. Hostizzy™ Homes & Villas is here to elevate your online presence across the board.


// </p>
//       </div>
//     </div>
<section>
      <div className="xpertMainSection">
        <h1 className="section-heading">PARTNER WITH THE EXPERTS</h1>
      </div>
      <div className="xpertMainSection">
          <div className="cardExpert ">
            <div className="icon-wrapper">
              <FaShieldAlt/>
            </div>
            <h4>Transparency and Security</h4>
            <p align="justify"> 
            When you entrust us with your property, you're guaranteed total transparency. We share all essential information, from guest booking details to your monthly reports. Our meticulous screening process ensures only the most trustworthy guests stay in your property.
            </p>
          </div>
  
          <div className="cardExpert ">
            <div className="icon-wrapper">
              <FaPeopleCarry/>
            </div>
            <h4>Flexible Management Plans</h4>
            <p align="justify">
            Our management plans cater to the unique needs of hosts and property owners across various booking platforms. Our competitive commission rate allows you to retain more from each booking. At Hostizzy™ Homes & Villas, we believe in sharing the comfort, charm, and unique value of your home with guests from around the world.
            </p>
          </div>
    
          <div className="cardExpert ">
            <div className="icon-wrapper">
             <FaServicestack/>
            </div>
            <h4>Exceptional Hospitality Services</h4>
            <p align="justify">
            We treat your property as our own, ensuring your guests enjoy a 5-star hotel level of service in the comfort of your home. For the exclusive properties we manage, we provide a full suite of hospitality services, including top-notch housekeeping, premium toiletries, fresh linens & laundry, and unique dining experiences.
            </p>
          </div>
          <div className="cardExpert ">
            <div className="icon-wrapper">
              <FaChartLine/>
            </div>
            <h4>Optimized Listings for Greater Visibility</h4>
            <p align="justify">
            We leverage data-driven strategies to optimize your listings, enhancing your visibility on multiple short-term rental platforms and attracting a larger pool of potential guests. With your property's high-quality images and our compelling descriptions, your listings will stand out. Hostizzy™ Homes & Villas is here to elevate your online presence across the board. Note: For optimal results, we recommend providing high-quality photos of your property.
            </p>
          </div>
    
      </div>
    </section>
  )
}

export default ExpertsSection
