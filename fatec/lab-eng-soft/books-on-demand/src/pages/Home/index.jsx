import { useContext, useEffect } from "react"
import CatalogContext from "../../context/data/catalog/CatalogContext"
import Category from "../../components/catalog/Category"


export default function Home(  ) {
    
    const {initialMockup, setClearCategoria} = useContext(CatalogContext);
    useEffect(() => {
        setClearCategoria()
    }, []);

    return (
        initialMockup.catalogo.map((categoria) => (
            <Category key={categoria.descricao} data={categoria} />
        ))
    )
}