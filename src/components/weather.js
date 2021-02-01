import React from 'react';

const Weather = ({ ...data }) => {
  return (
    <div>
      {data.name && (
        <div>
          <p>
            Location: {data.name}, {data.sys.country}
          </p>
          <p>Temperature: {data.main.temp}</p>
          <p>Pressure: {data.main.pressure}</p>
          <p>Sunset: {data.sys.sunset}</p>
          <p>{data.error}</p>
        </div>
      )}
      <p>{data.error}</p>
    </div>
  );
};

export default Weather;
