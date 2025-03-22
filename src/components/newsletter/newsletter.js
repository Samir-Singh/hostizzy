import React from 'react'
import "./newletter.scss"
import PhoneIcon from "@mui/icons-material/Phone";
const Newsletter = () => {
  return (
    <div>
     <div class="contact_us_div">
        <div class="left_div">
          <p class="need_help_para">Get the latest Updates.</p>
          <p class="expert_para">
		  Subscribe to our Newsletter and stay updated for the latest offers.
          </p>
        </div>
        <div class="right_div">


         <div className='newsletter_btn_container'><input type="text" className='newsletter_input' placeholder='Enter Your Email'/>
		 <button className='newsletter_btn'>Submit</button>
		 </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
