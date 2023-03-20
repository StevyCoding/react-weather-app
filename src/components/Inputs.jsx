import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import getCityList from "../services/cityListServices";
//import { createOptionFromCountries } from "../services/optionCity";
function Inputs(props) {
  const changeMode = (mode) => {
    props.mode(mode);
  };

  let fetchCities = async () => {
    const cities = await getCityList();
    return cities;
  };
  const [countries, setCity] = useState([]);
  useEffect(() => {
    async function getData() {
      const fetchData = await fetchCities();
      setCity(fetchData);
    }
    getData();
  }, []);

  if (countries != null) {
  //const groupedOptions = createOptionFromCountries(countries);

    //console.log("goupedOptions :");

    return (
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">


          <UilSearch hidden
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
          <UilLocationPoint hidden
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
          <div className="flex flex-row w-1/4 items-center justify-center">
            <button
              className="text-xl text-white font-light"
              onClick={() => changeMode("C")}
            >
              ° C
            </button>
            <p className="text-xl text-white mx-1">|</p>
            <button
              className="text-xl text-white font-light"
              onClick={() => changeMode("F")}
            >
              °F
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Inputs;
