import ServiceCard from "@/component/servicesSection/ServiceCard";
import React from "react";

const ServicePage = () => {
  const services = [
    {
      name: "App Development",
      description:
        "I am Full satck app developer. I am using Reactnative in app developmet.",
    },
    {
      name: "Website Development",
      description:
        "I am Full satck web developer. I am using next and node in web developmet.",
    },
  ];
  return (
    <div>
      <div>
        <div>
          {/* <h1>Services</h1> */}
          <div>
            {services.map((service, index) => {
              return <ServiceCard service={service} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
