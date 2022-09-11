import propTypes from 'prop-types';

const Header = (Fistbump) => {
  return   (
    <header>
  <h1>Fistbump</h1>
    </header>

  )  
}

Header.defaultProps = {
    title:'FIST-BUMP',
}

Header.propTypes = {
    title: propTypes.string,
}

export default Header