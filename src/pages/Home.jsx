import { Link } from 'react-router-dom';
import {
  DocumentPlusIcon,
  ScissorsIcon,
  DocumentIcon,
  LockClosedIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const Home = () => (
  <div className="container mx-auto p-6 text-center">
    <h1 className="text-4xl font-bold mb-4 text-orange-600">Welcome to MyToolbox</h1>
    <p className="text-lg mb-8 text-gray-600">
      Process your PDFs with ease using our powerful tools.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Link
        to="/merge-pdf"
        className="p-6 bg-orange-50 border border-orange-200 rounded-lg shadow-md hover:bg-orange-100 hover:scale-105 transition-all duration-300 flex flex-col items-center"
      >
        <DocumentPlusIcon className="w-12 h-12 text-orange-500 mb-3" />
        <h2 className="text-xl font-semibold text-orange-600">Merge PDF</h2>
        <p className="text-gray-600">Combine multiple PDFs into one.</p>
      </Link>
      <Link
        to="/split-pdf"
        className="p-6 bg-orange-50 border border-orange-200 rounded-lg shadow-md hover:bg-orange-100 hover:scale-105 transition-all duration-300 flex flex-col items-center"
      >
        <ScissorsIcon className="w-12 h-12 text-orange-500 mb-3" />
        <h2 className="text-xl font-semibold text-orange-600">Split PDF</h2>
        <p className="text-gray-600">Extract specific page ranges.</p>
      </Link>
      <Link
        to="/split-pdf-by-page"
        className="p-6 bg-orange-50 border border-orange-200 rounded-lg shadow-md hover:bg-orange-100 hover:scale-105 transition-all duration-300 flex flex-col items-center"
      >
        <DocumentIcon className="w-12 h-12 text-orange-500 mb-3" />
        <h2 className="text-xl font-semibold text-orange-600">Split by Page</h2>
        <p className="text-gray-600">Split into individual PDFs per page.</p>
      </Link>
      <Link
        to="/encrypt-pdf"
        className="p-6 bg-orange-50 border border-orange-200 rounded-lg shadow-md hover:bg-orange-100 hover:scale-105 transition-all duration-300 flex flex-col items-center"
      >
        <LockClosedIcon className="w-12 h-12 text-orange-500 mb-3" />
        <h2 className="text-xl font-semibold text-orange-600">Encrypt PDF</h2>
        <p className="text-gray-600">Add password protection.</p>
      </Link>
      <Link
        to="/ocr-pdf"
        className="p-6 bg-orange-50 border border-orange-200 rounded-lg shadow-md hover:bg-orange-100 hover:scale-105 transition-all duration-300 flex flex-col items-center"
      >
        <DocumentTextIcon className="w-12 h-12 text-orange-500 mb-3" />
        <h2 className="text-xl font-semibold text-orange-600">OCR PDF</h2>
        <p className="text-gray-600">Extract text from PDFs.</p>
      </Link>
    </div>
  </div>
);

export default Home;