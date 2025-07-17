import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  const temperatureStyle = {
    color: temperature > 20 ? "red" : "blue",
    fontWeight: "bold",
    fontSize: "24px",
  };

  return (
    <div>
      <p style={temperatureStyle}>Temperature: {temperature}<span></span></p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
