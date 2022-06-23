import apiGetCountries from '../../modules/api';

const GET = 'population/Country/GET';

const mapCountries = (country) => {
  const { iso2Code, name } = country;
  return {
    id: iso2Code,
    name,
    population: [],
  };
};

export const getCountries = (region) => async (dispatch) => {
  const data = await apiGetCountries(region);
  // const header = data[0];
  const filtered = data[1].filter((region) => region.id !== '');
  const countries = filtered.map((country) => mapCountries(country));
  dispatch({ type: GET, countries });
};

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GET:
      return action.countries;

    default:
      return state;
  }
}
