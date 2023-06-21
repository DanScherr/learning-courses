import React, { useState } from 'react';
import { createContext } from "react";


const BookPagesContext = createContext();

export const BookPagesProvider = ({children}) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
      }
    
      function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
      }
    
      function previousPage() {
        changePage(-1);
      }
    
      function nextPage() {
        changePage(1);
      }

      function backToFirstPage() {
        setPageNumber(1);
      }

    
    return <BookPagesContext.Provider
      value={{
        onDocumentLoadSuccess,
        changePage,
        previousPage,
        nextPage,
        backToFirstPage,
        numPages,
        pageNumber,
      }}
    >
        {children}
    </BookPagesContext.Provider>
}

export default BookPagesContext;