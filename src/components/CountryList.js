import PropTypes from 'prop-types';
import Country from './Country';

const CountryList = (props) => {
  const { countries } = props;
  return (
    <div className="column">
      <ul className="row-wrap">
        {countries.map((country) => {
          const { id, name, population } = country;
          return (
            <Country
              key={id}
              {...{
                id,
                name,
                population,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      population: PropTypes.arrayOf(Object).isRequired,
    }),
  ).isRequired,
};

export default CountryList;
