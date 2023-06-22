import React, { useContext, useEffect } from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from './../../static/books/firewall.pdf';
import classico1 from './../../static/books/classicos/jorge_amado.pdf'

import BookPagesContext from '../../context/book/pages/BookPagesContext';
import PagesNavBar from './shared/PagesNavBar';

import { pdfjs } from 'react-pdf';
import CatalogContext from '../../context/data/catalog/CatalogContext';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function PdfViwer(  ) {
    const {
        onDocumentLoadSuccess,
        pageNumber
    } = useContext(BookPagesContext);

    const {categoria, bookId} = useContext(CatalogContext)

    useEffect(() => {
        console.log('bookID:', categoria)
    },[])

    const bookPDF = ((id) => {
        switch (id) {
            case 1:
                
                return samplePDF;

            case 7:
                
                return classico1;

            default:
                break;
        }
    })

    return (
        <div id='bookPage'>
            <Document
                file={bookPDF(bookId)}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <PagesNavBar />

        </div>
    )
}