import { Link } from 'react-router-dom';
import logoSmall from '../imgs/colorSchemeLogo-small.png';

const Header = () => {
  return (
    <Link to="/">
      <header className="bg-Primary-dark text-text-light flex py-4 px-4 ">
        <img
          src={logoSmall}
          alt="logo of 3 squares overlapping of red, green and blue"
          className="h-16 lg:h-32"
        />
        <h1 className="text-2xl mx-2 my-auto">My Colour Palatte</h1>
      </header>
    </Link>
  );
};

export default Header;
