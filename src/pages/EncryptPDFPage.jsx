// src/pages/EncryptPDFPage.jsx
import { useState } from 'react';
import EncryptPDF from '../components/feature/EncryptPDF';
import { useEncryptPDF } from '../api/queries';
// import { useDownload } from '../hooks/useDownload';
import useDownload from '../hooks/useDownload';

const EncryptPDFPage = () => {
  const [error, setError] = useState('');
  const { mutate: encryptPDF, isLoading } = useEncryptPDF();
  const { downloadFile } = useDownload();

  const handleSubmit = ({ file, password }) => {
    encryptPDF({ file, password }, {
      onSuccess: (data) => {
        downloadFile(data, 'encrypted.pdf', 'application/pdf');
      },
      onError: (err) => {
        setError(err.response?.data?.error || 'Failed to encrypt PDF.');
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <EncryptPDF onSubmit={handleSubmit} />
      {isLoading && <p className="text-gray-600">Encrypting PDF...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default EncryptPDFPage;