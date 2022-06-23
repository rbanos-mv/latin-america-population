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
      <div className="filter">
        <input type="text" placeholder="Filter country list" onChange={onChange} />
      </div>
      <CountryList countries={filtered} />
    </div>
  );
};

export default HomePage;
