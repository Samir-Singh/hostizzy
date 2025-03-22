// import React from 'react';
import './index.css'; // Import your CSS file

import { FaStar} from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import TestimonialSlider from './SliderComponent';

const Testimonial = () => {
  return (

//     <div className="testimonial_main">
//   <div>
//    {/* <h3>What out Guest Say?</h3> */}
//     <div className="wrapper">
    
//       <div className="outer">
//         <div className="card" style={{ '--delay': -1 }}>
//           <div className="content">
//             {/* <div className="img"><img src="./M ISMAIL.png" alt="" /></div> */}
//             <div className="details">
//               <span className="name">Sachin</span>
//               <p className="review">Thank you for the warmth and hospitality. Awesome Experience. hank you for the warmth and hospitality. Awesome Experience</p>

//             </div>
//           </div>
//         <div style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>5 <FaStar color='#fe5858'/></div> 
//         </div>

//         <div className="card" style={{ '--delay': 0 }}>
//           <div className="content">
//             {/* <div className="img"><img src="./komail-.jpg" alt="" /></div> */}
//             <div className="details">
//               <span className="name">Deepika</span>
//                 <p className="review">Thank you for the warmth and hospitality. Awesome Experience. hank you for the warmth and hospitality. Awesome Experience</p>
//             </div>
//           </div>
//           <div className="reviewStarValue">5 <div style={{marginTop:"7px"}}><FaStar color='#fe5858'/></div></div>  
//         </div>

//         <div className="card" style={{ '--delay': 1 }}>
//           <div className="content">
//             {/* <div className="img"><img src="./murtaza.png" alt="" /></div> */}
//             <div className="details">
//               <span className="name">Ashutosh</span>
//                 <p className="review">Thank you for the warmth and hospitality. Awesome Experience. hank you for the warmth and hospitality. Awesome Experience</p>
//             </div>
//           </div>
//           <div className="reviewStarValue">5 <div style={{marginTop:"7px"}}><FaStar color='#fe5858'/></div></div>  
//         </div>

//         <div className="card" style={{ '--delay': 2 }}>
//           <div className="content">
//             {/* <div className="img"><img src="./Qalb.jpg" alt="" /></div> */}
//             <div className="details">
//               <span className="name">Ethan</span>
//                 <p className="review">Thank you for the warmth and hospitality. Awesome Experience. hank you for the warmth and hospitality. Awesome Experience</p>
//             </div>
//           </div>
//           <div className="reviewStarValue">5 <div style={{marginTop:"7px"}}><FaStar color='#fe5858'/></div></div>  
//         </div>

//         <div className="card" style={{ '--delay': 2 }}>
//           <div className="content">
//             {/* <div className="img"><img src="./komail.jpg" alt="" /></div> */}
//             <div className="details">
//               <span className="name">Garima</span>
//                 <p className="review">Thank you for the warmth and hospitality. Awesome Experience. Thank you for the warmth and hospitality. Awesome Experience</p>
//             </div>
//           </div>
//           <div className="reviewStarValue">5 <div style={{marginTop:"7px"}}><FaStar color='#fe5858'/></div></div> 
//         </div>
//       </div>
//     </div>
//     </div>
//     <div className='newletterMainSection'>
//       <h2>Would You Like to Connect ?</h2>

// <p align="justify">Interested in connecting with us? We’d love to hear from you! Feel free to reach out to us for more. information or to discuss how we can assist you.</p>

// <div className='box'>
//   <input type="checkbox" name="" id="message"/>
//   <div className='Boxcontent'>
//     <input type="text" placeholder='Email' className='subscribeEmail'/>
//     <button className='subscribeButton'>Submit</button>
//   </div>
//   <label for="message" className='designBox'></label>
// </div>
//     </div>
//     </div>
<Container>
<TestimonialSlider/>
</Container>
  );
}

export default Testimonial;

const Container = styled.div`
  width: 100%;
  max-width: 84vw;
  margin: 0 auto;
  // padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
`;



// import React from 'react';
// import './testimonial.scss'; // Import your CSS file

// import { FaStar} from "react-icons/fa";
// const CardSlider = () => {
//   return (

//     <div className="testimonial_main">
//   <div>
//    {/* <h3>What out Guest Say?</h3> */}
//     <div className="wrapper">
    
//       <div className="outer">
//         <div className="card" style={{ '--delay': -1 }}>
//           <div className="content">
//             {/* <div className="img"><img src="./M ISMAIL.png" alt="" /></div> */}
//             <div className="details">
//               <span className="name">Sachin</span>
//               <p className="review">Thank you for the warmth and hospitality. Awesome Experience. hank you for the warmth and hospitality. Awesome Experience</p>

//             </div>
//           </div>
//         <div style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>5 <FaStar color='#fe5858'/></div> 
//         </div>

//         <div className="card" style={{ '--delay': 0 }}>
//           <div className="content">
//             {/* <div className="img"><img src="./komail-.jpg" alt="" /></div> */}
//             <div className="details">
//               <span className="name">Deepika</span>
//                 <p className="review">Thank you for the warmth and hospitality. Awesome Experience. hank you for the warmth and hospitality. Awesome Experience</p>
//             </div>
//           </div>
//           <div className="reviewStarValue">5 <div style={{marginTop:"7px"}}><FaStar color='#fe5858'/></div></div>  
//         </div>

//         <div className="card" style={{ '--delay': 1 }}>
//           <div className="content">
//             {/* <div className="img"><img src="./murtaza.png" alt="" /></div> */}
//             <div className="details">
//               <span className="name">Ashutosh</span>
//                 <p className="review">Thank you for the warmth and hospitality. Awesome Experience. hank you for the warmth and hospitality. Awesome Experience</p>
//             </div>
//           </div>
//           <div className="reviewStarValue">5 <div style={{marginTop:"7px"}}><FaStar color='#fe5858'/></div></div>  
//         </div>

//         <div className="card" style={{ '--delay': 2 }}>
//           <div className="content">
//             {/* <div className="img"><img src="./Qalb.jpg" alt="" /></div> */}
//             <div className="details">
//               <span className="name">Ethan</span>
//                 <p className="review">Thank you for the warmth and hospitality. Awesome Experience. hank you for the warmth and hospitality. Awesome Experience</p>
//             </div>
//           </div>
//           <div className="reviewStarValue">5 <div style={{marginTop:"7px"}}><FaStar color='#fe5858'/></div></div>  
//         </div>

//         <div className="card" style={{ '--delay': 2 }}>
//           <div className="content">
//             {/* <div className="img"><img src="./komail.jpg" alt="" /></div> */}
//             <div className="details">
//               <span className="name">Garima</span>
//                 <p className="review">Thank you for the warmth and hospitality. Awesome Experience. Thank you for the warmth and hospitality. Awesome Experience</p>
//             </div>
//           </div>
//           <div className="reviewStarValue">5 <div style={{marginTop:"7px"}}><FaStar color='#fe5858'/></div></div> 
//         </div>
//       </div>
//     </div>
//     </div>
//     <div className='newletterMainSection'>
//       <h2>Would You Like to Connect ?</h2>

// <p align="justify">Interested in connecting with us? We’d love to hear from you! Feel free to reach out to us for more. information or to discuss how we can assist you.</p>

// <div className='box'>
//   <input type="checkbox" name="" id="message"/>
//   <div className='Boxcontent'>
//     <input type="text" placeholder='Email' className='subscribeEmail'/>
//     <button className='subscribeButton'>Submit</button>
//   </div>
//   <label for="message" className='designBox'></label>
// </div>
//     </div>
//     </div>
//   );
// }

// export default CardSlider;
