/** Context */
import { createContext } from "react";
/** Resources */
import BookImage from "./../../../static/images/category/opened-book-1.png"

const CatalogContext = createContext();


export const CatalogProvider = ({children}) => {
    const initialState = {
        catalogo: [],
        categorias: [],
        categoriaUltimosLidos: [],
        categoriaNovos: [],
        categoriaClassicos: [],
        categoriaFiccao: [],
        categoriaRomance: [],
        categoriaOutros: [],
    };

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
            initialMockup
        }}
    >
        {children}
    </CatalogContext.Provider>
}

export default CatalogContext;