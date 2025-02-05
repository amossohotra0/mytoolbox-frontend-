import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import ChooseFile from '../common/ChooseFile';
import FileList from '../common/FileList';
import Spinner from '../common/Spinner';

const MergePDF = ({ onSubmit, isLoading }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
    setError('');
  };

  const handleRemoveFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
    setError(''); // Clear error when removing a file
  };

  const handleSubmit = async () => {
    if (files.length < 2) {
      setError('Please select at least two PDF files.');
      return;
    }
    await onSubmit(files);
  };

  return (
    <div className="p-6 bg-white border border-orange-200 rounded-lg shadow-md flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-orange-600">Merge PDFs</h2>
      <ChooseFile
        onChange={handleFileChange}
        accept="application/pdf"
        multiple
        className="mb-4"
      />
      <FileList files={files} onRemoveFile={handleRemoveFile} className="mb-4 flex-grow" />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Button
        onClick={handleSubmit}
        disabled={files.length === 0 || isLoading}
        className={`w-full py-3 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center ${
          isLoading ? 'bg-orange-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 text-white'
        }`}
      >
        {isLoading ? (
          <>
            <Spinner className="mr-2" />
            Merging...
          </>
        ) : (
          'Merge'
        )}
      </Button>
    </div>
  );
};

MergePDF.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

MergePDF.defaultProps = {
  isLoading: false,
};

export default MergePDF;