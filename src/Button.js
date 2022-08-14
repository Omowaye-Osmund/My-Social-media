import propTypes from 'prop-types';

const Button = ({className, text, onClick}) => {

  return (
    <button onClick={onClick} className={className}>{text}</button>
  ) 

  
}

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func.isRequired,
}


export default Button