import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <h1>
      <FontAwesomeIcon icon={faCalculator} /> My Calculator
    </h1>
  );
}

export default Header;