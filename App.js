import React from 'react';
// import Welcome from './components/welcome';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';
import Greeting from './components/Greeting';

//API key
const API_KEY = '01195fa0bf71ec2ea337ab1a89cc4cc6';

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    if (city) {
      const api_url = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      const data = await api_url.json();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        error: undefined,
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: 'Введите название города!',
      });
    }
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Greeting name="Dmitiy" />
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;
