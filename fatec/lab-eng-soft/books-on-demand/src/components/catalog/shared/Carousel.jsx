export default function Carousel( {books=[]} ) {
    return (

        /** Indicators */
        <div id="carouselExample" className="carousel carousel slide mb-4">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            {/** Inner Content */}
            <div className="carousel-inner">
                {/** Item */}
                {books.map((item, index)=>(
                    <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
                        <div className="row align-">
                            <div className="col-6 my-auto">
                                <img src={item.pathImage} className="my-auto d-block w-100" alt="..."/>
                            </div>
                            <div className="col-5 my-auto">
                                    <h5 className="pe-5">{item.titulo}</h5>
                                    <p className="pe-10">{item.descricao}</p>
                            </div>
                            <div className="col-1">&nbsp;</div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/** Buttons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}