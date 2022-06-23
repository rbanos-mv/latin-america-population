import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../redux/countries/countries';

const setupStore = () => {
  const preloadedState = {
    countries: [
      {
        id: 'AR',
        name: 'Argentina',
        population: [
          { date: '2020', value: 700 },
          { date: '2019', value: 500 },
        ],
      },
      {
        id: 'MX',
        name: 'Mexico',
        population: [
          { date: '2020', value: 2000 },
          { date: '2019', value: 1000 },
        ],
      },
    ],
  };

  return configureStore({
    preloadedState,
    reducer: {
      countries: countriesReducer,
    },
  });
};

export default setupStore;
