import React from "react";

import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilTemperatureEmpty,
} from "@iconscout/react-unicons";

import {
  checkTempModeHourly,
  checkTempModeFeelslike,
  checkTempModeMinMax,
} from "../services/weatherServices";

function TemparatureAndDetails(props) {
  const mode = props.mode;
  const data = props.weatherData;
  function feeling(temp) {
     if (mode === "F") {
      if (temp < 55) return "🥶";
      else if (temp >= 56 && temp <= 77) return "😊";
      else return "🥵";
    }
    else {
      if (temp < 13) return "🥶";
      else if (temp >= 13 && temp <= 25) return "😊";
      else return "🥵";
    } 
  }

  return (
    <div>
      <div className="flex items-center justify-center text-xl  text-emerald-300">
        {props.weatherData.icon_text}
        {/* <p>Cloudy or whatever</p> */}
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={data.icon} alt="" className="w-20" />
        <p className="text-5xl">{checkTempModeHourly(mode, data)}°</p>

        {/* <p className="text-5xl">34°</p> */}
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center">
            <UilTemperature size={18} className="mt-1" />
            temperature:
            <span className="font-medium ml-1"> {data.temp_c}° </span>
            {/* <span className="font-medium ml-1">32°</span> */}
          </div>
          <div className="flex font-light text-sm items-center">
            <UilTear size={18} className="mt-1" />
            humidity:
            <span className="font-medium ml-1">{data.humidity}%</span>
            {/* <span className="font-medium ml-1">35%</span> */}
          </div>
          <div className="flex font-light text-sm items-center">
            <UilWind size={18} className="mt-1" />
            wind speed:
            <span className="font-medium ml-1"> {data.speed} kph</span>
          </div>
          <div className="flex font-light text-sm items-center">
            {feeling(checkTempModeFeelslike(mode, data))}feels like:
            <span className="font-medium ml-1">
              {" "}
              {Math.round(checkTempModeFeelslike(mode, data))}°
            </span>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-center justify-center 
      space-x-2 text-white text-sm py-3"
      >
        <UilSun />
        <p className="font-light">
          Rise : <span className="font-medium ml-1">{data.sunrise}</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set : <span className="font-medium ml-1">{data.sunset}</span>
        </p>
        <p className="font-light">|</p>

        <UilTemperature />
        <p className="font-light">
          Hight :{" "}
          <span className="font-medium ml-1">
            {checkTempModeMinMax(mode, "max", data)}°
          </span>
        </p>
        <p className="font-light">|</p>

        <UilTemperatureEmpty />
        <p className="font-light">
          Low :{" "}
          <span className="font-medium ml-1">
            {checkTempModeMinMax(mode, "min", data)}°
          </span>
        </p>
      </div>
    </div>
  );
}

export default TemparatureAndDetails;
