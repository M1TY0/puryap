import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import IProductModel from "../models/IProductModel";
import { Link } from "react-router-dom";
import StringUtil from "../utilities/StringUtil";
import "../styles/style.css";

function ProductCard({ id, name, code, info, type, numberOfPhotos, photo, subType, description }: IProductModel) {
  return (
    <Card
      className="product-card"
      style={{
        minWidth: "400px",
        minHeight: "205px",
        maxWidth: "400px",
        maxHeight: "auto",
        padding: "10px",
      }}
    >
      <Carousel className="product-carousel" interval={null}>
        {Array.from({ length: numberOfPhotos }, (_, index) => {
          const imageNumber = index + 1;
          const imageUrl = `images/products_images/${photo}_images/${code}_${imageNumber}.jpg`;
          return (
            <Carousel.Item key={imageNumber}>
              <img
                src={imageUrl}
                alt={`Image ${imageNumber} for ${name}`}
                className="d-block w-100 product-carousel-image"
                style={{ height: "360px", objectFit: "cover" }}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Card.Body>
        <Card.Title>{StringUtil.shortenText(name, 30)}</Card.Title>
        <Link to={`/products/${id}`}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
