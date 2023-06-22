/** Context */
import { createContext, useReducer } from "react";
import catalogReducer from "./CatalogReducer";
/** Resources */
import BookImage from "./../../../static/images/category/opened-book-1.png"
import jorgeAmado from './../../../static/images/category/jorge_amado.png'
const CatalogContext = createContext();


export const CatalogProvider = ({children}) => {

    const initialState = {
        categoria: {
            load: true,
            data: []
        },
        categoriaId: 'all',
        book: 0,
    };
    const [state, dispatch] = useReducer(catalogReducer, initialState);

    const setClearCategoria = (() => {
        dispatch({
            type: 'SET_CLEAR_CATEGORY',
        })
    })

    const setCategoriaID = ((id) => {
        dispatch({
            type: 'SET_CATALOG_ID',
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

    const setBookId = ((id) => {
        console.log('setbookid:', id)
        dispatch({
            type: 'SET_BOOK_ID',
            payload: id
        })
    })

    const setNumero = ((id) => {
        dispatch({
            type: 'SET_NUMERO',
            payload: id
        })
    })

    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '

    const initialMockup = {
        catalogo : [
            {
                id: 'categoriaUltimosLidos',
                descricao: 'Últimos Lidos',
                books: [
                    {id: 1, pathImage: BookImage, titulo: 'Appliance Firewall', descricao: lorem + lorem,},
                    {id: 2, pathImage: BookImage, titulo: 'Livro 2', descricao: lorem,},
                    {id: 3, pathImage: BookImage, titulo: 'Livro 3', descricao: lorem + lorem,},
                    {id: 99, pathImage: BookImage, titulo: 'Livro X', descricao: lorem + lorem,},
                    {id: 100, pathImage: BookImage, titulo: 'Livro 2', descricao: lorem,},
                    {id: 101, pathImage: BookImage, titulo: 'Livro 3', descricao: lorem + lorem,}
                ]
            },
            {
                id: 'categoriaNovos',
                descricao: 'Novos',
                books: [
                    {id: 4, pathImage: BookImage, titulo: 'Livro 1', descricao: lorem,},
                    {id: 5, pathImage: BookImage, titulo: 'Livro 2', descricao: lorem + lorem,},
                    {id: 6, pathImage: BookImage, titulo: 'Livro 3', descricao: lorem,}
                ]
            },
            {
                id: 'categoriaClassicos',
                descricao: 'Clássicos',
                books: [
                    {id: 7, pathImage: BookImage, titulo: 'Se for de paz pode entrar', descricao: 'O orixá Exu, símbolo de comunicação e união entre mundos, foi escolhido1 por Jorge Amado como guardião e, por isso, colocado na entrada da fundação criada em sua homenagem. Para esta exposição, uma estatueta colocada na entrada do Museu da Língua Portuguesa dá boas vindas aos visitantes e convida a pensar nos inúmeros olhares sobre a Bahia e o Brasil. Traz à vista nossa formação, que une várias culturas. Tudo isso cutuca nossos preconceitos e nos convida a refletir e ampliar as referências além dos estereótipos tão recorrentes nos mais diversos meios de comunicação e em nosso imaginário. Neste caderno, compartilhamos algumas de nossas leituras, por meio de trechos, imagens, comentários e perguntas. Convidamos você a continuar esse processo, lendo Jorge Amado, conversando com as pessoas e registrando suas impressões. Boa visita!',},
                    {id: 8, pathImage: BookImage, titulo: 'Livro 2', descricao: lorem,},
                    {id: 9, pathImage: BookImage, titulo: 'Livro 3', descricao: lorem + lorem,}
                ]
            },
            {
                id: 'categoriaFiccao',
                descricao: 'Ficção',
                books: [
                    {id: 10, pathImage: BookImage, titulo: 'Livro 1', descricao: lorem,},
                    {id: 11, pathImage: BookImage, titulo: 'Livro 2', descricao: lorem + lorem,},
                    {id: 12, pathImage: BookImage, titulo: 'Livro 3', descricao: lorem + lorem,}
                ]
            },
            {
                id: 'categoriaRomance',
                descricao: 'Romance',
                books: [
                    {id: 13, pathImage: BookImage, titulo: 'Livro 1', descricao: lorem,},
                    {id: 14, pathImage: BookImage, titulo: 'Livro 2', descricao: lorem,},
                    {id: 15, pathImage: BookImage, titulo: 'Livro 3', descricao: lorem,}
                ]
            },
            {
                id: 'categoriaOutros',
                descricao: 'Outros',
                books: [
                    {id: 16, pathImage: BookImage, titulo: 'Livro 1', descricao: lorem,},
                    {id: 17, pathImage: BookImage, titulo: 'Livro 2', descricao: lorem,},
                    {id: 18, pathImage: BookImage, titulo: 'Livro 3', descricao: lorem,}
                ]
            },
        ]}

    return <CatalogContext.Provider
        value = {{
            setClearCategoria,
            setCategoria,
            setCategoriaID,
            setBookId,
            setNumero,
            initialMockup,
            categoria: state.categoria,
            categoriaId: state.categoriaId,
            bookId: state.book,
        }}
    >
        {children}
    </CatalogContext.Provider>
}

export default CatalogContext;