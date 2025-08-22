"use client";
import React from "react";

const ServiceCard = ({ service }) => {
  console.log("services", service);
  return (
    <div>
      serviceCard
      <div>
        serivrs card is this Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quam, accusamus modi, magni mollitia, explicabo temporibus
        molestiae sed vero harum id deserunt. Atque, impedit iusto culpa
        sapiente veniam voluptate quia sequi?
      </div>
      <h1>{service.name}</h1>
    </div>
  );
};

export default ServiceCard;
