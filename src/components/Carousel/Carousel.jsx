import imagePokemon01 from "../../assets/images/pokemon_01.jpg";
import imagePokemon02 from "../../assets/images/pokemon_02.jpg";
import imagePokemon03 from "../../assets/images/pokemon_03.jpg";

const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" width={500} height={600}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imagePokemon01} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imagePokemon02} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imagePokemon03} className="d-block w-100" alt="..." />
                </div>
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
  )
};

export default Carousel;
