import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Dropdown = ({ label, items, isActive, onDropdownToggle, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(isActive);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsOpen(isActive);

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest('a') // Prevent closing when clicking NavLink
      ) {
        setIsOpen(false);
        onDropdownToggle();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isActive, onDropdownToggle]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onDropdownToggle();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 text-white hover:bg-orange-600 rounded-full px-4 py-2 transition-all duration-200 w-full md:w-auto text-left"
        onClick={handleToggle}
      >
        {Icon && <Icon className="w-5 h-5" />}
        <span>{label}</span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-orange-50 text-gray-800 border border-orange-200 shadow-lg rounded-lg transition-all duration-200 ease-out transform translate-y-0 opacity-100 z-50">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 hover:bg-orange-100 transition-all duration-200 ${
                    isActive ? 'bg-orange-200 font-semibold' : ''
                  }`
                }
                onClick={() => {
                  setIsOpen(false);
                  onDropdownToggle();
                }}
              >
                {item.icon && <item.icon className="w-5 h-5 text-orange-500" />}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
    })
  ).isRequired,
  isActive: PropTypes.bool,
  onDropdownToggle: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
};

Dropdown.defaultProps = {
  isActive: false,
  icon: null,
};

// CSS for slide-in animation (add to global stylesheet)
const dropdownStyles = `
  .dropdown-menu {
    animation: slideIn 0.2s ease-out;
  }
  @keyframes slideIn {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default Dropdown;