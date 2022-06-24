import PropTypes from 'prop-types';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { FLAGS_URL } from '../modules/environment';

const Country = (props) => {
  const { id, name, population } = props;
  const flagUrl = `${FLAGS_URL}/${id.toLowerCase()}.svg`;

  const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <li key={id}>
      <NavLink to={`/country/${id}`} className="country">
        <div className="flag">
          <div className="to-end">
            <HiOutlineArrowCircleRight className="icon" />
          </div>
          <img src={flagUrl} alt="flag" />
          <div className="column country-name">
            <h3>{name}</h3>
            <h4>
              {population.length
                ? `[${population[0].date}] ${numberWithCommas(population[0].value)}`
                : '0'}
            </h4>
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
