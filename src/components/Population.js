import PropTypes from 'prop-types';

const Population = (props) => {
  const { date, value } = props;

  const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <li className="card population">
      <h3>{date}</h3>
      <h3>{numberWithCommas(value)}</h3>
    </li>
  );
};

Population.propTypes = {
  date: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Population;
