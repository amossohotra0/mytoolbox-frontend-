// src/pages/SplitByPagePage.jsx
import { useState } from 'react';
import SplitByPage from '../components/feature/SplitByPage';
import { useSplitPDFByPage } from '../api/queries';
// import { useDownload } from '../hooks/useDownload';
import useDownload from '../hooks/useDownload';

const SplitByPagePage = () => {
  const [error, setError] = useState('');
  const { mutate: splitPDFByPage, isLoading } = useSplitPDFByPage();
  const { downloadFile } = useDownload();

  const handleSubmit = (file) => {
    splitPDFByPage(file, {
      onSuccess: (data) => {
        downloadFile(data, 'split_pages.zip', 'application/zip');
      },
      onError: (err) => {
        setError(err.response?.data?.error || 'Failed to split PDF by page.');
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <SplitByPage onSubmit={handleSubmit} />
      {isLoading && <p className="text-gray-600">Splitting PDF...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SplitByPagePage;