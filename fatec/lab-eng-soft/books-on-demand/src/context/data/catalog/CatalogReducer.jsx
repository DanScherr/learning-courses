const catalogReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CLEAR_CATEGORY':
            
            return {
                ...state,
                categoriaId: 'all'
            };

        case 'SET_CATALOG_ID':
            
            return {
                ...state,
                categoriaId: action.payload
            };

        case 'SET_CATALOG':
            
            return {
                ...state,
                categoria: {
                    load: false,
                    data: action.payload,
                }
            };

        case 'SET_NUMERO':
            
            return {
                ...state,
                numero: action.payload
            };

        case 'SET_BOOK_ID':
            return {
                ...state,
                book: action.payload
            };

        case 'ADD_BOOK_TO_CATEGORY':
            console.log('ENTROU NO REDUCERS')
            return {
                ...state,
                categoria: action.payload
            };
    
        default:
            return {...state};
    }
};


export default catalogReducer;