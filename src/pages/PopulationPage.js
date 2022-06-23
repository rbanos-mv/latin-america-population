import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PopulationList from '../components/PopulationList';
import { FLAGS_URL } from '../modules/environment';
import { getPopulation } from '../redux/countries/countries';

const PopulationPage = () => {
  const [isReady, setIsReady] = useState(false);
  const [country, setCountry] = useState(null);

  const { idCountry = 'xxx' } = useParams();
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countries, shallowEqual);

  useEffect(() => {
    if (countryList.length) {
      setIsReady(true);
      const country = countryList.find((item) => item.id === idCountry);
      if (country.population.length === 0) {
        dispatch(getPopulation(idCountry));
      }
    }
  }, [countryList.length]);

  if (countryList.length && isReady && country === null) {
    const country = countryList.find((item) => item.id === idCountry);
    if (country !== null && country.population.length) {
      setCountry(country);
    }
  }

  return (
    country && (
      <div className="column">
        <div className="card flag">
          <img src={`${FLAGS_URL}/${country.id.toLowerCase()}.svg`} alt="Flag" />
          <h2>{country.name}</h2>
        </div>
        <PopulationList population={country.population} />
      </div>
    )
  );
};

export default PopulationPage;
