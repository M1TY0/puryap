import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import IProductModel from "../models/IProductModel";
import ProductModel from "../models/ProductModel";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProductModel | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://localhost:7056/MainContorler");
        const newProducts: IProductModel[] = response.data.result.map(
          (v: IProductModel) => new ProductModel(v)
        );
        const foundProduct = newProducts.find((p: IProductModel) => p.id === parseInt(id || "", 10));
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-image-container">
        <img src={product.photo} alt={product.name} className="product-image"/>
      </div>
      <div className="product-info-container">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-info">{product.info}</p>
        <p className="product-code">Code: {product.code}</p>
      </div>
    </div>
  );
}