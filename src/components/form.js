import React, { useState } from 'react';
import Weather from './Weather';
import './Form.css';

const API_KEY = '01195fa0bf71ec2ea337ab1a89cc4cc6';
function Form() {
  const [data, setData] = useState([]);

  const gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      const data = await api_url.json();
      setData(data);
      console.log(data);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={gettingWeather}>
        <input type="text" name="city" placeholder="City" />
        <button>Receive weather</button>
      </form>
      <Weather {...data} />
    </div>
  );
}
export default Form;
