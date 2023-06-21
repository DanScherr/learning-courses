const catalogReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CLEAR_CATEGORY':
            
            return {
                ...state,
                categoriaId: 'all'
            };

        case 'SET_CATALOG_NAME':
            
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
    
        default:
            return {...state};
    }
};


export default catalogReducer;