import { useContext, useEffect } from "react";
import CategoryCard from "./shared/CategoryCard";
import CatalogContext from "../../context/data/catalog/CatalogContext";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";



export default function MainCategory(  ) {
    const {setCategoria, categoria, categoriaId} = useContext(CatalogContext)

    useEffect(() => {
        setCategoria();
    }, [])

    useEffect(() => {
        setCategoria();
    }, [categoriaId])

            

    return (
        <>
            {categoria.load 
            ?
                <Box sx={{ display: 'flex', mx: 'auto', mt: 'auto' }}>
                    <CircularProgress />
                </Box>
            :
                <div className="col-10 mx-auto">
                    <Grid 
                        container 
                        spacing={2} 
                        justifyContent="center" 
                        alignItems="center"
                        sx={{mx: "auto"}}
                    >
                        {categoria.data.map((categoria) => {
                            return (
                            categoria.books.map((livro) => {
                                return (
                                    <Grid key={toString(livro.id) + 'grid'} item xs={10} md={5} lg={4} sx={{mx: 'auto'}}>
                                        <CategoryCard 
                                            key={toString(livro.id) + 'CategoryCard'}
                                            categoria={categoria.descricao}
                                            title={livro.titulo}
                                            desc={livro.descricao}
                                            id={livro.id}
                                        />
                                    </Grid>
                                )
                            }))
                        })}
                    </Grid>
                </div>
                
        }
        </>
        
    )

}