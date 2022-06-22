import PropTypes from 'prop-types';
import Country from './Country';

const CountryList = (props) => {
  const { countries } = props;
  return (
    <ul className="country-list">
      {countries.map((region) => {
        const {
          id, iso2Code, name, population,
        } = region;
        return (
          <Country
            key={id}
            {...{
              id,
              iso2Code,
              name,
              population,
            }}
          />
        );
      })}
    </ul>
  );
};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      iso2Code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      population: PropTypes.arrayOf(Object).isRequired,
    }),
  ).isRequired,
};

export default CountryList;
