import { useEffect, useState } from "react";
import "./WeatherDisplay.css";

const apiKey = "6215134eb3aefea2e3d972838007d6e2";
const latitude = "9.896527";
const longitude = "8.858331";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

function WeatherDisplay() {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCurrentWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="weather-container">
        {currentWeather && (
          <div>
            <p className="title">
              Current Temp:
              <span>{currentWeather.main.temp}°C</span>
            </p>
            <p className="title">
              Feels Like:
              <span>{currentWeather.main.feels_like}°C</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default WeatherDisplay;
