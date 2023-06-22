/** MUI */
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'
/** Components */
import Carousel from './shared/Carousel'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import CatalogContext from '../../context/data/catalog/CatalogContext'
import './Category.css'


export default function Category( { data={}} ) {
    const {setCategoriaID} = useContext(CatalogContext)

    const navigate = useNavigate();
    const navegarCategoria = ((categoria) => {
        setCategoriaID(categoria);
        navigate('/category')
    })
    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-10">

                {/** Category Header */}
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button onClick={() => navegarCategoria(data.id)}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {data.descricao}
                            </Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
                </Box>

                {/** CAROUSEL */}
                <Carousel books={data.books} id={data.id} />
                
            </div>
        </div>
    )
}