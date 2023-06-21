import React from 'react';
import { BookPagesProvider } from '../../context/book/pages/BookPagesContext';
import PdfViwer from '../../components/book/PdfViwer';
import './index.css'


export default function Book() {

  return (
    <BookPagesProvider>
      <PdfViwer />
    </BookPagesProvider>
  );
}