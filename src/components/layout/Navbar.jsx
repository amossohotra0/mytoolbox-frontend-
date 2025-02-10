import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  PresentationChartBarIcon,
  ArrowPathIcon,
  UserIcon,
  UserPlusIcon,
  Bars3Icon,
  XMarkIcon,
  DocumentPlusIcon,
  ScissorsIcon,
  LockClosedIcon,
  DocumentIcon,
} from '@heroicons/react/24/outline';
import Dropdown from './DropdownList';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pdfItems = [
    { label: 'Merge PDF', to: '/merge-pdf', icon: DocumentPlusIcon },
    { label: 'Split PDF', to: '/split-pdf', icon: ScissorsIcon },
    { label: 'Split by Page', to: '/split-pdf-by-page', icon: DocumentIcon },
    { label: 'Encrypt PDF', to: '/encrypt-pdf', icon: LockClosedIcon },
    { label: 'OCR PDF', to: '/ocr-pdf', icon: DocumentTextIcon },
  ];

  const wordItems = [
    { label: 'Merge Word', to: '/merge-word', icon: DocumentPlusIcon },
    { label: 'Split Word', to: '/split-word', icon: ScissorsIcon },
  ];

  const pptItems = [
    { label: 'Merge PPT', to: '/merge-ppt', icon: DocumentPlusIcon },
    { label: 'Split PPT', to: '/split-ppt', icon: ScissorsIcon },
  ];

  const converterItems = [
    { label: 'PDF to Word', to: '/pdf-to-word', icon: ArrowPathIcon },
    { label: 'Word to PPT', to: '/word-to-ppt', icon: ArrowPathIcon },
  ];

  const handleDropdownToggle = (dropdown) => {
    console.log('Toggling:', dropdown, 'Current:', activeDropdown); // Debug
    setActiveDropdown(dropdown === activeDropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close dropdowns when toggling mobile menu
  };

  return (
    <nav className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold flex items-center space-x-2">
          <WrenchScrewdriverIcon className="w-6 h-6 text-orange-200" />
          <span>MyToolbox</span>
        </NavLink>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
        <ul
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:space-x-4 items-center absolute md:static top-16 left-0 right-0 bg-orange-500 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out z-50`}
        >
          <li className="w-full md:w-auto">
            <Dropdown
              label="PDF Tools"
              items={pdfItems}
              isActive={activeDropdown === 'pdf'}
              onToggle={() => handleDropdownToggle('pdf')}
              icon={DocumentIcon}
            />
          </li>
          <li className="w-full md:w-auto">
            <Dropdown
              label="Word Tools"
              items={wordItems}
              isActive={activeDropdown === 'word'}
              onToggle={() => handleDropdownToggle('word')}
              icon={DocumentTextIcon}
            />
          </li>
          <li className="w-full md:w-auto">
            <Dropdown
              label="PPT Tools"
              items={pptItems}
              isActive={activeDropdown === 'ppt'}
              onToggle={() => handleDropdownToggle('ppt')}
              icon={PresentationChartBarIcon}
            />
          </li>
          <li className="w-full md:w-auto">
            <Dropdown
              label="Converters"
              items={converterItems}
              isActive={activeDropdown === 'converter'}
              onToggle={() => handleDropdownToggle('converter')}
              icon={ArrowPathIcon}
            />
          </li>
          <li className="w-full md:w-auto">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-600 text-white'
                    : 'hover:bg-orange-600 hover:text-white'
                }`
              }
            >
              <UserIcon className="w-5 h-5" />
              <span>LOGIN</span>
            </NavLink>
          </li>
          <li className="w-full md:w-auto">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-600 text-white'
                    : 'hover:bg-orange-600 hover:text-white'
                }`
              }
            >
              <UserPlusIcon className="w-5 h-5" />
              <span>REGISTER</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;