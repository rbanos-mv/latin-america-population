import { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import CountryList from '../components/CountryList';

const HomePage = () => {
  const [filter, setFilter] = useState('');
  const countryList = useSelector((state) => state.countries, shallowEqual);

  const onChange = (event) => setFilter((event.target.value || '').trim().toLowerCase());

  const filtered = countryList.filter((country) => country.name.toLowerCase().includes(filter));

  return (
    <div>
      <div className="latin-america">
        <div className="head-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Latin_America_%28orthographic_projection%29.svg"
            alt="Latin America Map"
          />
        </div>
        <div className="head-right">
          <h2>Latin America</h2>
        </div>
      </div>
      <div className="filter">
        <input type="text" placeholder="Filter country list" onChange={onChange} />
      </div>
      <CountryList countries={filtered} />
    </div>
  );
};

export default HomePage;
