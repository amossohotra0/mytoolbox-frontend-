// src/pages/OCRPDFPage.jsx
import { useState } from 'react';
import OCRPDF from '../components/feature/OCRPDF';
import { useOCRPDF } from '../api/queries';
// import { useDownload } from '../hooks/useDownload';
import useDownload from '../hooks/useDownload';

const OCRPDFPage = () => {
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const { mutate: ocrPDF, isLoading } = useOCRPDF();
  const { downloadFile } = useDownload();

  const handleSubmit = ({ file, format }) => {
    ocrPDF({ file, format }, {
      onSuccess: (data) => {
        if (format === 'txt') {
          downloadFile(data, 'extracted_text.txt', 'text/plain');
        } else {
          setResult(JSON.stringify(data, null, 2));
        }
      },
      onError: (err) => {
        setError(err.response?.data?.error || 'Failed to process OCR.');
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <OCRPDF onSubmit={handleSubmit} />
      {isLoading && <p className="text-gray-600">Processing OCR...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {result && (
        <pre className="bg-gray-100 p-4 rounded mt-4 overflow-auto">
          {result}
        </pre>
      )}
    </div>
  );
};

export default OCRPDFPage;