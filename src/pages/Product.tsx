import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import IProductModel from "../models/IProductModel";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProductModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!id) {
          throw new Error("Product ID is missing.");
        }
        const response = await axios.get<IProductModel>(
          `https://localhost:7193/api/Product/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Unable to fetch product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-image-container">
        <img src={product.photo} alt={product.name} className="product-image" />
      </div>
      <div className="product-info-container">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-info">{product.info}</p>
        <p className="product-code">Code: {product.code}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}
