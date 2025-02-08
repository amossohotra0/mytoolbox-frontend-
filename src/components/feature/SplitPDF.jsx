import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import Input from '../common/Input';
import ChooseFile from '../common/ChooseFile';
import FileList from '../common/FileList';
import Spinner from '../common/Spinner';

const SplitPDF = ({ onSubmit, isLoading }) => {
  const [file, setFile] = useState(null);
  const [pageRanges, setPageRanges] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const handleRemoveFile = () => {
    setFile(null);
    setError('');
  };

  const handleSubmit = async () => {
    if (!file || !pageRanges) {
      setError('Please select a PDF file and enter page ranges.');
      return;
    }
    if (!/^\d+-\d+(,\d+-\d+)*$/.test(pageRanges)) {
      setError('Invalid page ranges format (e.g., "1-2,4-5").');
      return;
    }
    await onSubmit({ file, pageRanges });
  };

  return (
    <div className="p-6 bg-white border border-orange-200 rounded-lg shadow-md flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-orange-600">Split PDF</h2>
      <ChooseFile
        onChange={handleFileChange}
        accept="application/pdf"
        multiple={false}
        className="mb-4"
      />
      <FileList
        files={file ? [file] : []}
        onRemoveFile={handleRemoveFile}
        className="mb-4 flex-grow"
      />
      <Input
        type="text"
        value={pageRanges}
        onChange={(e) => setPageRanges(e.target.value)}
        placeholder="Page ranges (e.g., 1-2,4-5)"
        className="mb-6 px-6"
      />
      {error && <p className="text-red-500 mb-4 px-6">{error}</p>}
      <Button
        onClick={handleSubmit}
        disabled={!file || !pageRanges || isLoading}
        className={`w-full py-3 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center ${
          isLoading ? 'bg-orange-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 text-white'
        }`}
      >
        {isLoading ? (
          <>
            <Spinner className="mr-2" />
            Splitting...
          </>
        ) : (
          'Split'
        )}
      </Button>
    </div>
  );
};

SplitPDF.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

SplitPDF.defaultProps = {
  isLoading: false,
};

export default SplitPDF;