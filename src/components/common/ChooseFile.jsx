import PropTypes from 'prop-types';
import { useRef } from 'react';

const ChooseFile = ({ onChange, accept, multiple, disabled, className }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="inline-flex">
      <input
        type="file"
        ref={fileInputRef}
        onChange={onChange}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className="hidden"
      />
      <button
        type="button"
        onClick={handleButtonClick}
        disabled={disabled}
        className={`px-6 py-3 bg-orange-400 text-white rounded-full shadow-md hover:bg-orange-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 disabled:bg-gray-400 disabled:shadow-none disabled:cursor-not-allowed transition-all duration-200 ${className}`}
      >
        Choose File{multiple ? 's' : ''}
      </button>
    </div>
  );
};

ChooseFile.propTypes = {
  onChange: PropTypes.func,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

ChooseFile.defaultProps = {
  multiple: false,
  disabled: false,
};

export default ChooseFile;