import React from 'react';
import './Weather.css';
const Weather = ({ ...data }) => {
  return (
    <div>
      {data.name && (
        <div className="container">
          <p>
            Location: {data.name}, {data.sys.country}
          </p>
          <p>Temperature: {data.main.temp}</p>
          <p>Pressure: {data.main.pressure}</p>
          <p>Sunset: {data.sys.sunset}</p>
        </div>
      )}
      <p>{data.error}</p>
    </div>
  );
};

export default Weather;
