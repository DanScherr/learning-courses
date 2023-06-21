import React, { useContext } from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from './../../static/books/firewall.pdf';

import BookPagesContext from '../../context/book/pages/BookPagesContext';
import PagesNavBar from './shared/PagesNavBar';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function PdfViwer(  ) {
    const {
        onDocumentLoadSuccess,
        pageNumber
    } = useContext(BookPagesContext);

    return (
        <div id='bookPage'>
            <Document
                file={samplePDF}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <PagesNavBar />

        </div>
    )
}