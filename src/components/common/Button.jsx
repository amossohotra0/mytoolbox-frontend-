// src/components/common/Button.jsx
import PropTypes from 'prop-types';

const Button = ({ children, onClick, disabled, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-400 disabled:bg-gray-400 ${className}`}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;