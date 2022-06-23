import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FLAGS_URL } from '../modules/environment';

const Country = (props) => {
  const { id, name, population } = props;
  const flagUrl = `${FLAGS_URL}/${id.toLowerCase()}.svg`;

  const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <li key={id} className="half">
      <NavLink to={`/country/${id}`} className="card country">
        <div className="flag">
          <img src={flagUrl} alt="flag" />
          <div className="column country-name">
            <h3>{name}</h3>
            <h3>
              {population.length
                ? `[${population[0].date}] ${numberWithCommas(population[0].value)}`
                : '0'}
            </h3>
          </div>
        </div>
      </NavLink>
    </li>
  );
};

Country.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.arrayOf(Object).isRequired,
};

export default Country;
