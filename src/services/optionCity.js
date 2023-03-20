function createOptionFromCountries(countries) {
  let groupOption = [];
  for (const key in countries) {
    let cityOption = [];
    countries[key].forEach((city) => {
      cityOption.push({ value: city, label: city });
    });
    groupOption.push({ label: key, options: cityOption });
  }
  return groupOption;
}

export {createOptionFromCountries};