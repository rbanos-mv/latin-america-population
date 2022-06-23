import { API_URL } from './environment';

const apiGetCountries = (region) => fetch(`${API_URL}/country?format=json&region=${region}`)
  .then((response) => {
    const responseLength = Number(response.headers.get('content-length'));
    if (responseLength > 0) {
      return response.json();
    }
    return [];
  })
  .catch((error) => {
    throw error;
  });

const apiGetPopulation = (country) => fetch(`${API_URL}/country/${country}/indicator/SP.POP.TOTL?format=json`)
  .then((response) => {
    const responseLength = Number(response.headers.get('content-length'));
    if (responseLength > 0) {
      return response.json();
    }
    return [];
  })
  .catch((error) => {
    throw error;
  });

export { apiGetCountries, apiGetPopulation };
