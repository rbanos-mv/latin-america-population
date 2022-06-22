import { shallowEqual, useSelector } from 'react-redux';
import CountryList from '../components/CountryList';

const HomePage = () => {
  const countryList = useSelector((state) => state.countries, shallowEqual);
  let filtered = countryList;

  const onChange = (event) => {
    const text = (event.target.value || '').trim();
    console.log(text);
    if (text) {
      filtered = countryList.filter((country) => country.name.toLowerCase().includes(text));
      console.log(filtered);
    }
  };

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
