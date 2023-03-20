import { DateTime } from "luxon";

const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "63622a5a9e194407a7502955231703";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ key: API_KEY, ...searchParams });
  return fetch(url).then((res) => res.json());
};

const formatForecastWeather = (data) => {
  const { location, current, forecast } = data;

  const { lat, lon, name, localtime_epoch, tz_id, country } = location;
  const localtime = formatToLocalTime(localtime_epoch, tz_id);
  const {
    feelslike_c,
    feelslike_f,
    condition,
    temp_c,
    temp_f,
    humidity,
    wind_kph: speed,
  } = current;

  const { icon, text: icon_text } = condition;
  const { forecastday } = forecast;
  let { hour: hours, astro, day } = forecastday[0];

  const { sunrise, sunset, moonrise, moonset, moon_phase } = astro;
  const { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f } = day;
  let nbr = formatToLocalTime(localtime_epoch, tz_id,"hh");
  hours = hours.slice(nbr,nbr+7);
  return {
    country,
    lat,
    lon,
    temp_c,
    temp_f,
    name,
    humidity,
    speed,
    feelslike_c,
    feelslike_f,
    localtime,
    icon,
    icon_text,
    forecastday,
    hours,
    sunrise,
    sunset,
    moonrise,
    moonset,
    moon_phase,
    maxtemp_c,
    maxtemp_f,
    mintemp_c,
    mintemp_f,
    tz_id,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "forecast.json",
    searchParams
  ).then(formatForecastWeather);

  return formattedCurrentWeather;
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const checkTempModeHourly = (mode, obj) => {
  if (mode === "F") return obj.temp_f;
  else return obj.temp_c;
};

const checkTempModeDaily = (mode, obj) => {
  if (mode === "F") return obj.avgtemp_f;
  else return obj.avgtemp_c;
};

const checkTempModeFeelslike = (mode, obj) => {
  if (mode === "F") return obj.feelslike_f;
  else return obj.feelslike_c;
};
const checkTempModeMinMax = (mode, opt, obj) => {
  if (opt === "min") {
    if (mode === "F") return Math.round(obj.mintemp_f);
    else return Math.round(obj.mintemp_c);
  } else if (opt === "max") {
    if (mode === "F") return Math.round(obj.maxtemp_f);
    else return Math.round(obj.maxtemp_c);
  }
};
export {
  checkTempModeMinMax,
  checkTempModeFeelslike,
  checkTempModeDaily,
  checkTempModeHourly,
  formatToLocalTime,
  getFormattedWeatherData,
};
