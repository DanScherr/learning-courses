import { Button } from "@mui/material";
import { useContext } from "react";
import CatalogContext from "../../../context/data/catalog/CatalogContext";
import { useNavigate } from "react-router-dom";

export default function Carousel( {books=[], id=''} ) {
    const {setBookId, addBookToUltimosVistos} = useContext(CatalogContext)
    
    const navigate = useNavigate()
    const navegarPDF = ((id) => {
        let livro = books.filter((book) => (
            book.id === id
        ))
        console.log('---> livro escolhido:', livro)
        addBookToUltimosVistos(livro)
        setBookId(id)
        navigate('/book')
    })
    
    const top3 = books.slice(0,3)
    
    return (
        /** Indicators */
        <div id={id} className="carousel carousel slide mb-4">
            <div className="carousel-indicators">
                <button type="button" data-bs-target={'#' + id} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target={'#' + id} data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target={'#' + id} data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            {/** Inner Content */}
            
                <div className="carousel-inner">
                    {/** Item */}
                    {
                    top3.map((item, index)=>(
                        
                            <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                <div className="row align-">
                                    <div className="col-1">&nbsp;</div>
                                    <div className="col-5 my-auto">
                                        <Button onClick={() => navegarPDF(item.id)}>
                                            <img src={item.pathImage} className="categoryImage my-auto d-block w-100" alt="..."/>
                                        </Button>
                                    </div>
                                    <div className="col-5 my-auto">
                                            <h5 className="pe-5 tituloCarousel">{item.titulo}</h5>
                                            <p className="descricaoCatalogo pe-10">{item.descricao}</p>
                                    </div>
                                    <div className="col-1">&nbsp;</div>
                                </div>
                            </div>
                        
                    ))}
                </div>
            
            
            {/** Buttons */}
            <button className="carousel-control-prev" type="button" data-bs-target={'#' + id} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={'#' + id} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}