const url =
  "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json";
const fetchCityList = () => {
  return fetch(url).then((res) => res.json());
};

const getCityList = async () => {
  let cities = await fetchCityList().then((data) => {
    return data
  });
  return cities;
};
export default getCityList;
