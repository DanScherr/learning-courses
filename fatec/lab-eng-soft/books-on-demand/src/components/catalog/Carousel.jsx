/** Images */
import BookImage from './../../static/images/category/opened-book-1.png'
/** MUI */
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'


const categoriaUltimosLidos = [
    {pathImage: BookImage, titulo: 'Livro 1', descricao: '',},
    {pathImage: BookImage, titulo: 'Livro 2', descricao: '',},
    {pathImage: BookImage, titulo: 'Livro 3', descricao: '',}
]

export default function Carousel(  ) {
    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-10">
                {/** Category Item */}
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Category X
                            </Typography>
                        </Button>
                        <Button color="inherit">Back to top</Button>
                    </Toolbar>
                </AppBar>
                </Box>
            <div id="carouselExample" className="carousel carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                {/** Carousel */}
                <div className="carousel-inner">
                    {/** Carousel Item */}
                    {categoriaUltimosLidos.map((item, index)=>(
                        <div className={index === 1 ? "carousel-item active" : "carousel-item"}>
                            <div className="row align-">
                                <div className="col-6 my-auto">
                                    <img src={BookImage} className="my-auto d-block w-100" alt="..."/>
                                </div>
                                <div className="col-5 my-auto">
                                        <h5 className="pe-5">{item.titulo}</h5>
                                        <p className="pe-10">Some representative placeholder content for the first slide.</p>
                                </div>
                                <div className="col-1">&nbsp;</div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
    )
}