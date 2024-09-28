import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import IProductModel from "../models/IProductModel";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import StringUtil from "../utilities/StringUtil";

function ProductCard({ id, name, code, info, type, numberOfPhotos, photo, subType, description }: IProductModel) {
  const maxWords = 60;
//Card.Img variant="top" src="images/Ultra Şeffaf Epoksi Döküm Reçinesi 15 Kg_images/PUREPOXY130-15 Kg_1.jpg" alt={name} />
  return (
    <Card className="product-card" style={{ minWidth: "300px", minHeight: "205px", maxWidth: "400px", maxHeight: "666px", }}>
      <Card.Img variant="top" src={`${photo}/${code}_1.jpg`} alt={`${photo}/${code}_1.jpg`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/products/${id}`}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;