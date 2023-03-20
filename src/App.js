import React, { useState, useEffect } from "react";
import "./App.css";
import TopBtn from "./components/TopBtn";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemparatureAndDetails from "./components/TemparatureAndDetails";
import Forecast from "./components/Forecast";
import { getFormattedWeatherData } from "./services/weatherServices";

function App() {
  // change the temperature unit °C or° F
  const [tempMode = "C", setTempMode] = useState("");

  const handleTempMode = (newTempMode) => {
    setTempMode(newTempMode);
  };

  // change the temperature unit °C or° F
  const [city, setCity] = useState("lyon");

  const handleCity = async (newCity) => {
    await fetchWeather();
    console.log(newCity);

    setCity(newCity);
  };

  let fetchWeather = async () => {
    const data = await getFormattedWeatherData({
      q: city,
      days: 6,
      aqi: "no",
      alert: "no",
    });

    return data;
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const fetchData = await fetchWeather();
      setData(fetchData);
    }
    getData();
  }, [city]);

  if (data != null && data.hours != null) {
    console.log(data);
    return (
      <div
        className="mx-auto max-w-screen-md mt-4  
  py-5 px-32 bg-gradient-to-br from-zinc-900 
  to-emerald-700 g-fit shadow-xl shadow-gray-400"
      >
        <TopBtn city={handleCity} />

        <Inputs mode={handleTempMode} />

        <TimeAndLocation
          name={data.name}
          localtime={data.localtime}
          country={data.country}
        />
        <TemparatureAndDetails mode={tempMode} weatherData={data} />

        <Forecast
          title="hourly forecast"
          mode={tempMode}
          weatherData={data}
          interMode="hourly"
        />
        <Forecast
          title="daily forecast"
          mode={tempMode}
          weatherData={data}
          interMode="daily"
        />
      </div>
    );
  }
}

export default App;
