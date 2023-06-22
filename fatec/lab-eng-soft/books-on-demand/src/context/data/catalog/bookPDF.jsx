import classico1 from './../../../static/books/classicos/jorge_amado.pdf'


export const bookPDF = ((titulo) => {
    switch (titulo) {
        case 'classico1':
            
            return classico1;
    
        default:
            break;
    }
})