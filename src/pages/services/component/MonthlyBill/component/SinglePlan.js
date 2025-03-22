import React from "react";
import "./SinglePlans.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const SinglePlan = ({ data,idx }) => {
  return (
    <div class="single_plan_main_div">
      <div>
        <div class="top_div">
          <div class="content_div">
            <p class="plan_name">{data?.plan_name}</p>
            {/* <p class="plan_fees">
              <CurrencyRupeeIcon />
              {data?.plan_fee}
            </p>
            <p class="plan_duration">{data?.plan_duration}</p> */}
          </div>
          <div class="img_div">
            <img src={idx==1?"https://creativelayers.net/themes/homez-html/images/icon/pricing-icon-2.svg":idx==2?"https://creativelayers.net/themes/homez-html/images/icon/pricing-icon-1.svg":"https://creativelayers.net/themes/homez-html/images/icon/pricing-icon-3.svg"}/>
          </div>
        </div>

        <div class="bottom_div">
          {data?.plan_details?.map((item, idx) => (
            <p key={idx} class="details_para">
              <CheckCircleIcon style={{ fontSize: "20px" }} /> {item}
            </p>
          ))}
        </div>
      </div>

      <div>
        <div class="btn_div">
          <button class="btn">Click Here</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePlan;
