/** Context */
import { createContext, useReducer } from "react";
import catalogReducer from "./CatalogReducer";
/** Resources */
import BookImage from "./../../../static/images/category/opened-book-1.png"

const CatalogContext = createContext();


export const CatalogProvider = ({children}) => {

    const initialState = {
        categoria: {
            load: true,
            data: []
        },
        categoriaId: 'all'
    };
    const [state, dispatch] = useReducer(catalogReducer, initialState);

    const setClearCategoria = (() => {
        dispatch({
            type: 'SET_CLEAR_CATEGORY',
        })
    })

    const setCategoriaID = ((id) => {
        dispatch({
            type: 'SET_CATALOG_NAME',
            payload: id
        })
    })

    const setCategoria = (() => {
        let data = []
        if (state.categoriaId==='all') 
            data = initialMockup.catalogo
        else {
            data = initialMockup.catalogo.filter((item) =>( 
                item.id === state.categoriaId
            ))
        }
        dispatch({
            type: 'SET_CATALOG',
            payload: data
        })
    })


    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '

    const initialMockup = {
        catalogo : [
            {
                id: 'categoriaUltimosLidos',
                descricao: 'Últimos Lidos',
                books: [
                    {pathImage: BookImage, titulo: 'Alimentação sem carne', descricao: lorem,},
                    {pathImage: BookImage, titulo: 'Livro 2', descricao: lorem,},
                    {pathImage: BookImage, titulo: 'Livro 3', descricao: lorem,}
                ]
            },
            {
                id: 'categoriaNovos',
                descricao: 'Novos',
                books: [
                    {pathImage: BookImage, titulo: 'Livro 1', descricao: lorem,},
                    {pathImage: BookImage, titulo: 'Livro 2', descricao: lorem,},
                    {pathImage: BookImage, titulo: 'Livro 3', descricao: lorem,}
                ]
            },
            {
                id: 'categoriaClassicos',
                descricao: 'Clássicos',
                books: [
                    {pathImage: BookImage, titulo: 'Livro 1', descricao: lorem,},
                    {pathImage: BookImage, titulo: 'Livro 2', descricao: lorem,},
                    {pathImage: BookImage, titulo: 'Livro 3', descricao: lorem,}
                ]
            },
            {
                id: 'categoriaFiccao',
                descricao: 'Ficção',
                books: [
                    {pathImage: BookImage, titulo: 'Livro 1', descricao: lorem,},
                    {pathImage: BookImage, titulo: 'Livro 2', descricao: lorem,},
                    {pathImage: BookImage, titulo: 'Livro 3', descricao: lorem,}
                ]
            },
            {
                id: 'categoriaRomance',
                descricao: 'Romance',
                books: [
                    {pathImage: BookImage, titulo: 'Livro 1', descricao: lorem,},
                    {pathImage: BookImage, titulo: 'Livro 2', descricao: lorem,},
                    {pathImage: BookImage, titulo: 'Livro 3', descricao: lorem,}
                ]
            },
            {
                id: 'categoriaOutros',
                descricao: 'Outros',
                books: [
                    {pathImage: BookImage, titulo: 'Livro 1', descricao: lorem,},
                    {pathImage: BookImage, titulo: 'Livro 2', descricao: lorem,},
                    {pathImage: BookImage, titulo: 'Livro 3', descricao: lorem,}
                ]
            },
        ]}

    return <CatalogContext.Provider
        value = {{
            setClearCategoria,
            setCategoria,
            setCategoriaID,
            initialMockup,
            categoria: state.categoria
        }}
    >
        {children}
    </CatalogContext.Provider>
}

export default CatalogContext;