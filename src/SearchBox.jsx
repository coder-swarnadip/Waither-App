import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2d8d02a590de5a2237cf7d2f35e97442";

  const getWeatherInfo = async () => {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    if (data.cod !== 200) {
      throw new Error("City not found");

    }

    const result = {
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      description: data.weather[0].description,
    };

    return result;
  };

  const handleChange = (event) => {
    setCity(event.target.value);
    setError(false); 
 };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const weatherInfo = await getWeatherInfo();
      updateInfo(weatherInfo);
      setCity("");
      setError(false); 
    } catch (err) {
      console.error("No such city found in API!");
      setError(true);
      setTimeout(() => {
        setError(false);
      },3000); 
    }
  };

  return (
    <div className="search-box">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Location"
          variant="filled"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>

      {error && (
        <div className="popup-alert">
          <Alert severity="error">Place not found!</Alert>
        </div>
      )}
    </div>
  );
}
