import { HiOutlineMicrophone } from 'react-icons/hi';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = () => {
  const currentYear = new Date().getFullYear();
  return (
    <header>
      <nav>
        <div className="row">
          <Link to="/">
            <IoIosArrowBack className="icon" />
          </Link>
          <div className="year">{currentYear}</div>
        </div>
        <h1>Latin America Population</h1>
        <div>
          <HiOutlineMicrophone className="icon" />
          <IoIosSettings className="icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
