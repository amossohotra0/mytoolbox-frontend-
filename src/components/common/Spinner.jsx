import PropTypes from 'prop-types';

const Spinner = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
};

Spinner.defaultProps = {
  className: '',
};

// CSS for fading tail effect (add to your global CSS or a CSS module)
const spinnerStyles = `
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .animate-spin {
    animation: spin 1s linear infinite;
  }
`;

// Note: Add the above CSS to your global stylesheet (e.g., index.css) or a CSS module
export default Spinner;