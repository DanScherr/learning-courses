import React, { useContext, useEffect } from 'react';
import { Document, Page } from 'react-pdf';

/** Livros */
import samplePDF from './../../static/books/firewall.pdf';
/** classicos */
import CrimeECastigo from './../../static/books/classicos/Crime_e_Castigo_Fiodor_Dostoievski.pdf'
import OCortico from './../../static/books/classicos/Aluisio_Azevedo_O_Cortico.pdf'
import DomCasmurro from './../../static/books/romances/domCasmurro.pdf'
import EsauEJaco from './../../static/books/romances/esau.pdf'
import MitoDaCaverna from './../../static/books/classicos/O_mito_da_caverna_Platao_O_mito_da_caver.pdf'

/** ficcao */
import milNovescentos from './../../static/books/ficcao/1984_George_Orwell.pdf'
import jupiteAVenda from './../../static/books/ficcao/Jupiter_a_Venda_Isaac_Asimov.pdf'
import fahrenheit from './../../static/books/ficcao/Fahrenheit_451.pdf'

/** Romance */
import Moscas from './../../static/books/romances/O_senhor_das_moscas_william_golding.pdf'

/** Outros */
import MundoSofia from './../../static/books/outros/O_Mundo_de_Sofia.pdf'

import BookPagesContext from '../../context/book/pages/BookPagesContext';
import PagesNavBar from './shared/PagesNavBar';

import { pdfjs } from 'react-pdf';
import CatalogContext from '../../context/data/catalog/CatalogContext';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function PdfViwer(  ) {
    const {
        onDocumentLoadSuccess,
        pageNumber,
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
                
                return CrimeECastigo;
            
            case 8:
                
                return OCortico;

            case 9:
                
                return MitoDaCaverna;

            case 10:
                
                return milNovescentos;

            case 11:
                
                return jupiteAVenda;

            case 12:
                
                return fahrenheit;
            
            case 13:
                
                return DomCasmurro;
            
            case 14:
                
                return EsauEJaco;

            case 15:
                
                return Moscas;

            case 16:
                
                return MundoSofia;

            case 17:
                
                return EsauEJaco;

            case 18:
                
                return EsauEJaco;

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