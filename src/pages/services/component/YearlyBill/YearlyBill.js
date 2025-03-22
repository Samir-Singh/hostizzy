import React from "react";
import "./YearlyBill.scss";
import SingleBill from "./component/SingleBill/SingleBill";

const YearlyBill = () => {
  const data = [
    {
      heading: "Comprehensive 360° Management",
      para: "At Hostizzy, we take care of everything from start to finish so that you can sit back and enjoy the rewards of owning a vacation rental property. We handle the entire process from creating and optimising your listing on online portals to managing guest services, cleaning, maintenance, and more. So, whether your guests are here for a weekend getaway or an extended stay, they’ll leave with a smile and memories that will last a lifetime.",
    },

    {
      heading: "Vacation Rental Management",
      para: "Sit back, relax, and let us take care of your vacation rental property! We’ll handle everything from guest communication to pricing management and sales and marketing. Plus, we’ll showcase your property on all major vacation rental websites, managing bookings and responding to inquiries with lightning-fast speed, so you can focus on what really matters – creating unforgettable guest experiences.",
    },

    {
      heading: "Basic Hosting Management",
      para: "Hostizzy will revolutionise the way you manage your vacation rental property. We’ll take care of everything from optimising your listings to pricing and occupancy management, ensuring your property shines like a beacon of hospitality on platforms like Airbnb. Trust us to showcase your property’s unique charm and appeal, and watch as guests flock to experience the ultimate vacation getaway!",
    },
  ];

  return (
    <div class="yearly_bill_main">
      <SingleBill data={data[0]} />
      <SingleBill data={data[1]} />
      <SingleBill data={data[2]} />
    </div>
  );
};

export default YearlyBill;
