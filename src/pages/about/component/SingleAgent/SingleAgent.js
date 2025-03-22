import React from "react";
import "./SingleAgent.scss";

const SingleAgent = ({ data }) => {
  console.log(data);
  return (
    <div class="agent_main_div">
      <div class="agent_img_div">
        <img src={data?.img} class="agent_img" alt="img" />
      </div>
      <p class="agent_name">{data?.name}</p>
      <p class="agent_profession">{data?.proff}</p>
    </div>
  );
};

export default SingleAgent;
