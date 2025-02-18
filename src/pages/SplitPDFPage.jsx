// src/pages/SplitPDFPage.jsx
import { useState } from 'react';
import SplitPDF from '../components/feature/SplitPDF';
import { useSplitPDF } from '../api/queries';
// import { useDownload } from '../hooks/useDownload';
import useDownload from '../hooks/useDownload';


const SplitPDFPage = () => {
  const [error, setError] = useState('');
  const { mutate: splitPDF, isLoading } = useSplitPDF();
  const { downloadFile } = useDownload();

  const handleSubmit = ({ file, pageRanges }) => {
    splitPDF({ file, pageRanges }, {
      onSuccess: (data) => {
        downloadFile(data, 'split.pdf', 'application/pdf');
      },
      onError: (err) => {
        setError(err.response?.data?.error || 'Failed to split PDF.');
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <SplitPDF onSubmit={handleSubmit} />
      {isLoading && <p className="text-gray-600">Splitting PDF...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SplitPDFPage;