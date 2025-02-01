// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import MergePDFPage from './pages/MergePDFPage';
import SplitPDFPage from './pages/SplitPDFPage';
import SplitByPagePage from './pages/SplitByPagePage';
import EncryptPDFPage from './pages/EncryptPDFPage';
import OCRPDFPage from './pages/OCRPDFPage';
import LogInPage from './pages/LogInPage.jsx'
import RegisterPage from './pages/ResgisterPage.jsx'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merge-pdf" element={<MergePDFPage />} />
            <Route path="/split-pdf" element={<SplitPDFPage />} />
            <Route path="/split-pdf-by-page" element={<SplitByPagePage />} />
            <Route path="/encrypt-pdf" element={<EncryptPDFPage />} />
            <Route path="/ocr-pdf" element={<OCRPDFPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;