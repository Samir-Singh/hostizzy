import React from "react";
import "./MonthlyBill.scss";
import SinglePlan from "./component/SinglePlan";

const MonthlyBill = () => {
  const data = [
    {
      plan_name: "OTA Management",
      plan_fee: "5000",
      plan_duration: "per month",
      plan_details: [
        "Managing all aspects of the online account management",
        "Listing/managing the property on 3 major OTAs (Airbnb, MMT, and Booking.com)",
        "Calendar management, visibility management, and pricing management and On-Demand Pricing",
        "Handling online guest inquiries",
        "Subscription-based model",
      ],
    },

    {
      plan_name: "Social Media Management",
      plan_fee: "10000",
      plan_duration: "per month",
      plan_details: [
        "Setting up social media accounts on facebook and Instagram",
        "Optimizing the account targeting good visiblity",
        "Content generation and posting.",
        "Better Community engagement.",
        "Monthly performance reporting and analyzing areas to improve.",
      ],
    },

    {
      plan_name: "Social Media Plan",
      plan_fee: "15000",
      plan_duration: "per month",
      plan_details: [
        "Managing all aspects of the online account management",
        "Listing/managing the property on 3 major OTAs (Airbnb, MMT, and Booking.com)",
        "Calendar management, visibility management, and pricing management and On-Demand Pricing",
        "Handling online guest inquiries",
        "Subscription-based model",
        "Monitoring trends and conversations",
        "Analysing data to measure the success of campaigns",
        "Responding to customer inquiries in a timely manner and providing customer service",
      ],
    },
  ];
  return (
    <div class="monthly_bill_main_div">
      <SinglePlan data={data[0]} idx={1} />
      <SinglePlan data={data[1]} idx={2}/>
      {/* <SinglePlan data={data[2]} idx={3}/> */}
    </div>
  );
};

export default MonthlyBill;
