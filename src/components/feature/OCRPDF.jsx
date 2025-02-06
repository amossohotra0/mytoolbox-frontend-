import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import ChooseFile from '../common/ChooseFile';
import FileList from '../common/FileList';

const OCRPDF = ({ onSubmit }) => {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState('json');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const handleSubmit = async () => {
    if (!file) {
      setError('Please select a PDF file.');
      return;
    }
    await onSubmit({ file, format });
  };

  return (
    <div className="p-6 bg-white border border-orange-200 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-orange-600">OCR PDF</h2>
      <ChooseFile
        onChange={handleFileChange}
        accept="application/pdf"
        multiple={false}
        className="mb-4"
      />
      {file && <FileList files={[file]} className="mb-4" />}
      <select
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        className="mb-6 px-4 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white text-orange-800 w-full"
      >
        <option value="json">JSON</option>
        <option value="txt">Text</option>
      </select>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Button onClick={handleSubmit} disabled={!file} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-200">
        Process
      </Button>
    </div>
  );
};

OCRPDF.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default OCRPDF;