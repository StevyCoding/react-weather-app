import React from "react";
import { formatToLocalTime } from "../services/weatherServices";
import {
  checkTempModeHourly,
  checkTempModeDaily,
} from "../services/weatherServices";

function Forecast(props) {
  let data = props.weatherData;
  const mode = props.mode;
  const title = props.title;
  if (props.interMode === "daily") {
    return (
      <div>
        <div className="flex items-center  mt-6">
          <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2" />
        <div className="flex flex-row items-center justify-between text-white">
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm">
              {formatToLocalTime(
                data.forecastday[0].date_epoch,
                data.tz_id,
                "cccc"
              )}
            </p>
            <img
              src={data.forecastday[0].day.condition.icon}
              alt=""
              className="w-12 my-1"
              alr=""
            />
            <p className="font-medium">
              {Math.round(checkTempModeDaily(mode, data.forecastday[0].day))}°
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm">
              {formatToLocalTime(
                data.forecastday[1].date_epoch,
                data.tz_id,
                "cccc"
              )}
            </p>
            <img
              src={data.forecastday[1].day.condition.icon}
              alt=""
              className="w-12 my-1"
              alr=""
            />
            <p className="font-medium">
              {Math.round(checkTempModeDaily(mode, data.forecastday[1].day))}°
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm">
              {formatToLocalTime(
                data.forecastday[2].date_epoch,
                data.tz_id,
                "cccc"
              )}
            </p>
            <img
              src={data.forecastday[2].day.condition.icon}
              alt=""
              className="w-12 my-1"
              alr=""
            />
            <p className="font-medium">
              {Math.round(checkTempModeHourly(mode, data.hours[2]))}°
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm">
              {formatToLocalTime(
                data.forecastday[3].date_epoch,
                data.tz_id,
                "cccc"
              )}
            </p>
            <img
              src={data.forecastday[3].day.condition.icon}
              alt=""
              className="w-12 my-1"
              alr=""
            />
            <p className="font-medium">
              {Math.round(checkTempModeHourly(mode, data.hours[3]))}°
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm">
              {formatToLocalTime(
                data.forecastday[4].date_epoch,
                data.tz_id,
                "cccc"
              )}
            </p>
            <img
              src={data.forecastday[4].day.condition.icon}
              alt=""
              className="w-12 my-1"
              alr=""
            />
            <p className="font-medium">
              {Math.round(checkTempModeHourly(mode, data.hours[4]))}°
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm">
              {formatToLocalTime(
                data.forecastday[5].date_epoch,
                data.tz_id,
                "cccc"
              )}
            </p>
            <img
              src={data.forecastday[5].day.condition.icon}
              alt=""
              className="w-12 my-1"
              alr=""
            />
            <p className="font-medium">
              {Math.round(checkTempModeHourly(mode, data.hours[5]))}°
            </p>
          </div>
        </div>
      </div>
    );
  } else if (props.interMode === "hourly") {
    return (
      <div>
        <div className="flex items-center  mt-6">
          <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2" />
        <div className="flex flex-row items-center justify-between text-white">
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm">
              {formatToLocalTime(
                data.hours[0].time_epoch,
                data.tz_id,
                "hh:mm a"
              )}
            </p>
            <img
              src={data.hours[0].condition.icon}
              alt=""
              className="w-12 my-1"
              alr=""
            />
            <p className="font-medium">
              {Math.round(checkTempModeHourly(mode, data.hours[0]))}°
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm">
              {formatToLocalTime(
                data.hours[1].time_epoch,
                data.tz_id,
                "hh:mm a"
              )}
            </p>
            <img
              src={data.hours[1].condition.icon}
              alt=""
              className="w-12 my-1"
              alr=""
            />
            <p className="font-medium">
              {Math.round(checkTempModeHourly(mode, data.hours[1]))}°
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm">
              {formatToLocalTime(
                data.hours[2].time_epoch,
                data.tz_id,
                "hh:mm a"
              )}
            </p>
            <img
              src={data.hours[2].condition.icon}
              alt=""
              className="w-12 my-1"
              alr=""
            />
            <p className="font-medium">
              {Math.round(checkTempModeHourly(mode, data.hours[2]))}°
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm">
              {formatToLocalTime(
                data.hours[3].time_epoch,
                data.tz_id,
                "hh:mm a"
              )}
            </p>
            <img
              src={data.hours[3].condition.icon}
              alt=""
              className="w-12 my-1"
              alr=""
            />
            <p className="font-medium">
              {Math.round(checkTempModeHourly(mode, data.hours[3]))}°
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm">
              {formatToLocalTime(
                data.hours[4].time_epoch,
                data.tz_id,
                "hh:mm a"
              )}
            </p>
            <img
              src={data.hours[4].condition.icon}
              alt=""
              className="w-12 my-1"
              alr=""
            />
            <p className="font-medium">
              {Math.round(checkTempModeHourly(mode, data.hours[4]))}°
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm">
              {formatToLocalTime(
                data.hours[5].time_epoch,
                data.tz_id,
                "hh:mm a"
              )}
            </p>
            <img
              src={data.hours[5].condition.icon}
              alt=""
              className="w-12 my-1"
              alr=""
            />
            <p className="font-medium">
              {Math.round(checkTempModeHourly(mode, data.hours[5]))}°
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;
