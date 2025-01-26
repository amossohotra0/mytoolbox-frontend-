// src/api/queries.js
import { useMutation } from '@tanstack/react-query';
import apiClient from './apiClient';

export const useMergePDFs = () => {
  return useMutation({
    mutationFn: async (files) => {
      const formData = new FormData();
      files.forEach((file) => formData.append('pdf_files', file));
      const response = await apiClient.post('/api/merge-pdf/', formData, {
        responseType: 'blob',
      });
      return response.data;
    },
  });
};

export const useSplitPDF = () => {
  return useMutation({
    mutationFn: async ({ file, pageRanges }) => {
      const formData = new FormData();
      formData.append('pdf_file', file);
      formData.append('page_ranges', pageRanges);
      const response = await apiClient.post('/api/split-pdf/', formData, {
        responseType: 'blob',
      });
      return response.data;
    },
  });
};

export const useSplitPDFByPage = () => {
  return useMutation({
    mutationFn: async (file) => {
      const formData = new FormData();
      formData.append('pdf_file', file);
      const response = await apiClient.post('/api/split-pdf-by-page/', formData, {
        responseType: 'blob',
      });
      return response.data;
    },
  });
};

export const useEncryptPDF = () => {
  return useMutation({
    mutationFn: async ({ file, password }) => {
      const formData = new FormData();
      formData.append('pdf_file', file);
      formData.append('password', password);
      const response = await apiClient.post('/api/encrypt-pdf/', formData, {
        responseType: 'blob',
      });
      return response.data;
    },
  });
};

export const useOCRPDF = () => {
  return useMutation({
    mutationFn: async ({ file, format = 'json' }) => {
      const formData = new FormData();
      formData.append('pdf_file', file);
      formData.append('format', format);
      const response = await apiClient.post('/api/ocr-pdf/', formData, {
        responseType: format === 'txt' ? 'blob' : 'json',
      });
      return response.data;
    },
  });
};