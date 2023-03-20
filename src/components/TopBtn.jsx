import React from "react";

function TopBtn(props) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Paris",
    },
    {
      id: 3,
      title: "Rome",
    },
    {
      id: 4,
      title: "New York",
    },
    {
      id: 5,
      title: "Tokyo",
    },
  ];

  return ( 
  <div className="flex items-center justify-around my-6"> 
    {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium" onClick={()=> props.city(city.title)}>{city.title}</button>
    ))}
  </div>
  );
}

export default TopBtn;
