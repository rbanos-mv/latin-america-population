import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FLAGS_URL } from '../modules/environment';

const Country = (props) => {
  const {
    id, iso2Code, name, population,
  } = props;
  const flagUrl = `${FLAGS_URL}/${iso2Code.toLowerCase()}.svg`;

  return (
    <div key={id} className="card">
      <NavLink to={`/country/${iso2Code}`} className="country">
        <img src={flagUrl} alt="flag" className="flag" width="100" />
        <div className="country-name">
          <p>{name}</p>
          <p>{population.length ? population[0] : '0'}</p>
        </div>
      </NavLink>
    </div>
  );
};

Country.propTypes = {
  id: PropTypes.string.isRequired,
  iso2Code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.arrayOf(Object).isRequired,
};

export default Country;
