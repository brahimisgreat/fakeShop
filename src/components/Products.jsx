import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {};
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };
const filterProduct= (cat) => {
    const updatedList = data.filter((x)=>x.category === cat)
    setFilter(updatedList)
}

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(`men's clothing`)}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(`women's clothing`)}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(`jewelery`)}>
            Jewelery Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(`electronics`)}>
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            
              <div className="col-md-3 mb-4" key={product.id}>
                <div  className="card h-100 text-center p-4" style={{width: "18rem"}} >
                  <img src={product.image} className="card-img-top" alt={product.title} style={{height:'13.8rem'}}/>
                  <div className="card-body" >
                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                    <p className="card-text lead fw-bold">
                      ${product.price}
                    </p>
                    <Link href="#" className="btn btn-outline-dark">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Lastest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
