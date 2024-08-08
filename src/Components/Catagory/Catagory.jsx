import React from "react";
import CatagoryCard from "./CatagoryCard";
import women_category from "./Media/women-catageory.webp";
import men_category from "./Media/men-categeory.webp";
import accessorie_category from "./Media/accessories.webp";

const Catageory = () => {
  let catageories = [
    {
      name: "Men",
      season: "New Arrivals",
      image: men_category,
      id: "bc-1",
      menId1: "men-content-1",
      menId2: "men-content-2",
      buttonId: "men-button",
    },
    {
      name: "Women",
      season: "Spring 2023",
      image: women_category,
      id: "bc-2",
      menId1: "women-content-1",
      menId2: "women-content-2",
      buttonId: "women-button",
    },
    {
      name: "Accessories",
      season: "New Trend",
      image: accessorie_category,
      id: "bc-3",
      menId1: "acess-content-1",
      menId2: "acess-content-2",
      buttonId: "acess-button",
    },
  ];

  const renderedCatagories = catageories.map((catageory) => {
    return <CatagoryCard catageory={catageory} key={catageory.id} />;
  });

  return (
    <section className="catageories">
      <div className="catageory-container flex-box">{renderedCatagories}</div>
    </section>
  );
};

export default Catageory;
