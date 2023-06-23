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

    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '

    const initialMockup = {
        catalogo : [
            {
                id: 'categoriaUltimosLidos',
                descricao: 'Últimos Lidos',
                books: [
                    {id: 9, pathImage: BookImage, titulo: 'A Alegoria da Caverna', descricao: 'Mito da caverna é uma metáfora criada pelo filósofo grego Platão. A história é uma tentativa de explicar a condição de ignorância em que vivem os seres humanos, aprisionados pelos sentidos e os preconceitos que impedem o conhecimento da verdade.',},
                    {id: 14, pathImage: BookImage, titulo: 'Esaú e Jaco', descricao: 'Esaú e Jacó, publicado em 1904, é o penúltimo romance de Machado de Assis. Ambientada entre o fim do Império e o início da República, a obra retrata os grandes acontecimentos da época, da abolição da escravatura às revoltas contra o governo de Floriano Peixoto.',},
                    {id: 10, pathImage: BookImage, titulo: '1984', descricao: 'Após uma guerra global, semelhante à segunda grande guerra, porém com mais bombas atômicas, o mundo foi dividido em três continentes: Lestásia, Eurásia e Oceania, onde fica a cidade de Londres. Esse último é comandado pelo líder Big Brother, a figura máxima de poder e controle, “o olho que tudo vê”.',},
                    {id: 12, pathImage: BookImage, titulo: 'Fahrenheit 451', descricao: 'Adaptação do livro de Ray Bradbury sobre uma sociedade do futuro que baniu todos os materiais de leitura e o trabalho dos bombeiros de manter as fogueiras a 451 graus: a temperatura que o papel queima. Um bombeiro começa a repensar sua função ao conhecer uma jovem encantadora que adora livros.',},
                    {id: 16, pathImage: BookImage, titulo: 'O Mundo de Sofia', descricao: 'Sofia é uma adolescente de 14 anos, e nas vésperas de seu aniversário começa a receber cartas anônimas. A menina fica indignada com o acontecido, uma vez que muitas circunstancias das cartas encaixam-se com sua vida, outra peculiaridade é que as cartas vem de inúmeros meios não somente por caixa postal!',},
                    {id: 15, pathImage: BookImage, titulo: 'O Senhor das Moscas', descricao: 'Depois de um acidente de avião, um grupo de estudantes chega a uma ilha. Eles acabam se dividindo em dois grupos. Enquanto um é organizado, o outro recorre à selvageria e usa o medo do desconhecido para controlar os outros.',}
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
                    {id: 7, pathImage: BookImage, titulo: 'Crime e Castigo', descricao: 'Neste livro, Raskólnikov, um jovem estudante, pobre e desesperado, perambula pelas ruas de São Petersburgo até cometer um crime que tentará justificar por uma teoria: grandes homens, como César ou Napoleão, foram assassinos absolvidos pela História.',},
                    {id: 8, pathImage: BookImage, titulo: 'O Cortiço', descricao: 'O romance mostra as mazelas e a vida miserável dos moradores de duas habitações coletivas. João Romão é ganancioso comerciante de origem portuguesa, dono de um terreno no Rio de Janeiro onde constrói moradias de baixo custo para obter renda.',},
                    {id: 13, pathImage: BookImage, titulo: 'Dom Casmurro', descricao: '"Dom Casmurro" conta a história de Bento Santiago (Bentinho), apelidado de Dom Casmurro por ser calado e introvertido. Na adolescência, apaixona-se por Capítu, abandonando o seminário e, com ele, os desígnios traçados por sua mãe, Dona Glória, para que se tornasse padre. Casam-se e tudo corre bem, até o amor se tornar ciúme e desconfiança. É esta a grande questão que magistralmente Dom Casmurro expõe ao longo de 148 capítulos: a dúvida que paira ao longo de toda a obra sobre a possibilidade de traição de Capítu, agravada pela extraordinária semelhança do filho de ambos, Ezequiel, com o grande amigo de Bentinho, Escobar.',},
                    {id: 14, pathImage: BookImage, titulo: 'Esaú e Jaco', descricao: 'Esaú e Jacó, publicado em 1904, é o penúltimo romance de Machado de Assis. Ambientada entre o fim do Império e o início da República, a obra retrata os grandes acontecimentos da época, da abolição da escravatura às revoltas contra o governo de Floriano Peixoto.',},
                    {id: 9, pathImage: BookImage, titulo: 'A Alegoria da Caverna', descricao: 'Mito da caverna é uma metáfora criada pelo filósofo grego Platão. A história é uma tentativa de explicar a condição de ignorância em que vivem os seres humanos, aprisionados pelos sentidos e os preconceitos que impedem o conhecimento da verdade.',}
                ]
            },
            {
                id: 'categoriaFiccao',
                descricao: 'Ficção',
                books: [
                    {id: 10, pathImage: BookImage, titulo: '1984', descricao: 'Após uma guerra global, semelhante à segunda grande guerra, porém com mais bombas atômicas, o mundo foi dividido em três continentes: Lestásia, Eurásia e Oceania, onde fica a cidade de Londres. Esse último é comandado pelo líder Big Brother, a figura máxima de poder e controle, “o olho que tudo vê”.',},
                    {id: 11, pathImage: BookImage, titulo: 'Jupiter a venda', descricao: 'júpiter, o planeta gigante de nosso sistema solar, poderia ser objeto de venda ou arrendamento a outras criaturas que pouquíssimo teriam em comum com nossa espécie humana, com finalidaes ao mesmo tempo, óbvias e desconcertantes.',},
                    {id: 12, pathImage: BookImage, titulo: 'Fahrenheit 451', descricao: 'Adaptação do livro de Ray Bradbury sobre uma sociedade do futuro que baniu todos os materiais de leitura e o trabalho dos bombeiros de manter as fogueiras a 451 graus: a temperatura que o papel queima. Um bombeiro começa a repensar sua função ao conhecer uma jovem encantadora que adora livros.',}
                ]
            },
            {
                id: 'categoriaRomance',
                descricao: 'Romance',
                books: [
                    {id: 13, pathImage: BookImage, titulo: 'Dom Casmurro', descricao: '"Dom Casmurro" conta a história de Bento Santiago (Bentinho), apelidado de Dom Casmurro por ser calado e introvertido. Na adolescência, apaixona-se por Capítu, abandonando o seminário e, com ele, os desígnios traçados por sua mãe, Dona Glória, para que se tornasse padre. Casam-se e tudo corre bem, até o amor se tornar ciúme e desconfiança. É esta a grande questão que magistralmente Dom Casmurro expõe ao longo de 148 capítulos: a dúvida que paira ao longo de toda a obra sobre a possibilidade de traição de Capítu, agravada pela extraordinária semelhança do filho de ambos, Ezequiel, com o grande amigo de Bentinho, Escobar.',},
                    {id: 14, pathImage: BookImage, titulo: 'Esaú e Jaco', descricao: 'Esaú e Jacó, publicado em 1904, é o penúltimo romance de Machado de Assis. Ambientada entre o fim do Império e o início da República, a obra retrata os grandes acontecimentos da época, da abolição da escravatura às revoltas contra o governo de Floriano Peixoto.',},
                    {id: 15, pathImage: BookImage, titulo: 'O Senhor das Moscas', descricao: 'Depois de um acidente de avião, um grupo de estudantes chega a uma ilha. Eles acabam se dividindo em dois grupos. Enquanto um é organizado, o outro recorre à selvageria e usa o medo do desconhecido para controlar os outros.',}
                ]
            },
            {
                id: 'categoriaOutros',
                descricao: 'Outros',
                books: [
                    {id: 16, pathImage: BookImage, titulo: 'O Mundo de Sofia', descricao: 'Sofia é uma adolescente de 14 anos, e nas vésperas de seu aniversário começa a receber cartas anônimas. A menina fica indignada com o acontecido, uma vez que muitas circunstancias das cartas encaixam-se com sua vida, outra peculiaridade é que as cartas vem de inúmeros meios não somente por caixa postal!',},
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