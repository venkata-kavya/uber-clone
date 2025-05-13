import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "24B, Near Kapoor's cafe, Sheriyan's Coding School",
    "19A, Tech Park Avenue, Opposite Coding Hub",
    "13C, Next to Dev's Coffee, Silicon Street",
    "88D, Under Sky Bridge, Hacker Colony",
    "42Z, Infront of Byte Mall, Code City",
    "5X, Beside Pixel Tower, Logic Land",
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div
          onClick={() => {
            props.setVehiclePanel(true);
          }}
          key={index}
          className="flex items-center justify-start gap-4 my-2 border-gray-100 border-2 p-3 rounded-xl hover:border-black cursor-pointer"
        >
          <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
