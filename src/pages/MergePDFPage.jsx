// src/pages/MergePDFPage.jsx
import { useState } from 'react';
import MergePDF from '../components/feature/MergePDF';
import { useMergePDFs } from '../api/queries';
// import { useDownload } from '../hooks/useDownload';
import useDownload from '../hooks/useDownload';


const MergePDFPage = () => {
  const [error, setError] = useState('');
  const { mutate: mergePDFs, isLoading } = useMergePDFs();
  const { downloadFile } = useDownload();

  const handleSubmit = (files) => {
    mergePDFs(files, {
      onSuccess: (data) => {
        downloadFile(data, 'merged.pdf', 'application/pdf');
      },
      onError: (err) => {
        setError(err.response?.data?.error || 'Failed to merge PDFs.');
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <MergePDF onSubmit={handleSubmit} />
      {isLoading && <p className="text-gray-600">Merging PDFs...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default MergePDFPage;