import Carousel from 'react-bootstrap/Carousel';
import './ItemCarousel.css'
import { API_ENDPOINTS } from '../../../config/api';

const ProductCarousel = (props) => {
  return (
    <div className="product__carousel__container">
      <div className="product__carousel">
        <Carousel variant="dark" interval={4000}>
          <Carousel.Item>
            <div className="carousel__image__container">
              <img className="carousel__image" src={`${API_ENDPOINTS.IMAGES}/${props.item.category}/${props.item.image[0].filename}`} alt="item" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel__image__container">
              <img className="carousel__image" src={`${API_ENDPOINTS.IMAGES}/${props.item.category}/${props.item.image[1].filename}`} alt="item" />
            </div>
          </Carousel.Item>
          {/* <Carousel.Item>
            <div className="carousel__image__container">
                <img className="carousel__image" src={`${API_ENDPOINTS.IMAGES}/${props.item.category}/${props.item.image[2].filename}`} alt="item"/>
              </div>
            </Carousel.Item> */}
        </Carousel>
      </div>
    </div>
  );
}

export default ProductCarousel;