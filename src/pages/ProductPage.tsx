import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IProductModel from "../models/IProductModel";
import axios from "axios";
import ProductModel from "../models/ProductModel";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const [products, setProducts] = useState<IProductModel[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7193/api/Product/tproduct"
        );
        const newProducts = response.data.result.map(
          (v: IProductModel) => new ProductModel(v)
        );
        setProducts(newProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="products-container">
      {products?.map((product) => (
       // <Link to={`/products/${product.id}`} key={product.id}>
          <ProductCard
            id={product.id}
            name={product.name}
            code={product.code}
            info={product.info}
            description={product.description}
            type={product.type}
            subType={product.subType}
            photo={product.photo}
            numberOfPhotos={product.numberOfPhotos}
          />
        //</Link>
      ))}
    </div>
  );
}
