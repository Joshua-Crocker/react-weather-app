import localweather from './StJohnsWeather.json';
import './App.css';
import {useState} from 'react';

function App() {
  const [clicked, setClicked] = useState(0);
  return (
    <>
      <button onClick={ (evt) => {
        setClicked(clicked + 1);
      }}>{clicked}</button>
      <h2>Josh's Weather</h2>
      <WeatherList weather={localweather}></WeatherList>
    </>
  );
}

function WeatherList({weather}) {
  return (
    <>
      <h2>{weather.city}</h2>
      {weather.forecast.map( (day) => {
        return <Weather info={day}></Weather>
      })} 
    </>
  );
}

function Weather({info}) {
  return (
    <>
      <p>{info.day}</p>
      <p>{info.temp}</p>
      <p>{info.precip}</p>
      <p>{info.wind}</p>
      <br></br>
    </>
  );
}

export default App;