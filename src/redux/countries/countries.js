import { apiGetCountries, apiGetPopulation } from '../../modules/api';

const DET = 'population/Country/DETAIL';
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
  const filtered = data[1].filter((region) => region.id !== '');
  const countries = filtered.map((country) => mapCountries(country));
  dispatch({ type: GET, countries });
};

const mapPopulation = (population) => {
  const { date, value } = population;
  return { date, value };
};

export const getPopulation = (idCountry) => async (dispatch) => {
  const data = await apiGetPopulation(idCountry);
  const filtered = data[1].filter((population) => population.value);
  const population = filtered.map((population) => mapPopulation(population));
  if (population.length) {
    const { id, value } = filtered[0].country;
    const payload = { id, name: value, population };
    dispatch({ type: DET, payload });
  }
};

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case DET: {
      const { id, name, population } = action.payload;
      const found = state.find((country) => country.id === id);
      if (!found) {
        return { id, name, population };
      }
      return state.map((country) => {
        if (country.id !== id) {
          return country;
        }
        return { ...country, population };
      });
    }

    case GET:
      return action.countries;

    default:
      return state;
  }
}
