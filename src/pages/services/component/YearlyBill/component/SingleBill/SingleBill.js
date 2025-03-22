import React from "react";
import "./SingleBill.scss";
import dotted_img from "../../../../../../assets/images/dottedLine.png";

const SingleBill = ({ data }) => {
  return (
    <div class="single_bill_main">
      <h1 class="bill_head">{data?.heading}</h1>
      <div class="dotted_img_div">
        <img src={dotted_img} alt="dotted_img" class="dotted_img" />
      </div>
      <p align="justify" class="bill_para">{data?.para}</p>
    </div>
  );
};

export default SingleBill;
