import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import Input from '../common/Input';
import ChooseFile from '../common/ChooseFile';
import FileList from '../common/FileList';

const EncryptPDF = ({ onSubmit }) => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const handleSubmit = async () => {
    if (!file || !password) {
      setError('Please select a PDF file and enter a password.');
      return;
    }
    await onSubmit({ file, password });
  };

  return (
    <div className="p-6 bg-white border border-orange-200 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-orange-600">Encrypt PDF</h2>
      <ChooseFile
        onChange={handleFileChange}
        accept="application/pdf"
        multiple={false}
        className="mb-4"
      />
      {file && <FileList files={[file]} className="mb-4" />}
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="mb-6"
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Button onClick={handleSubmit} disabled={!file || !password} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-200">
        Encrypt
      </Button>
    </div>
  );
};

EncryptPDF.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default EncryptPDF;