import React, { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Products.css";

function Products() {
  const produtos = {
    BOLOS: [
      {
        nome: "Red velvet",
        preco: 120,
        img: "img-loja/redvelvet.jpg",
      },

      {
        nome: "Banoffe",
        preco: 120,
        img: "img-loja/banoffe.jpg",
      },

      {
        nome: "Tiramissu",
        preco: 120,
        img: "img-loja/tiramissu.jpg",
      },
    ],

    SALGADO: [
      {
        nome: "Empadão",
        preco: 25,
        img: "img-loja/empadao.jpg",
      },

      {
        nome: "Crepioca",
        preco: 25,
        img: "img-loja/crepioca.jpg",
      },

      {
        nome: "Crep de Nutella"  
        ,
        preco: 30,
        img: "img-loja/crepNutella.jpg",
      },
    ],

    GELADOS: [
      {
        nome: "Coffe Nutella",
        preco: 25,
        img: "img-loja/coffenutella.jpg",
      },

      {
        nome: "Cappuchino Ice",
        preco: 25,
        img: "img-loja/cappuchinoIce.jpg",
      },

      {
        nome: "Choco Ice",
        preco: 25,
        img: "img-loja/chocoice.jpg",
      },
    ],
  };

  const [ProductType, setProductType] = useState("BOLOS");

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="products" id="products">
      <div className="container" data-aos="fade-right">
      <div className="titulo" data-aos="fade-right" >
        <h1 data-aos="fade-down">Produtos
        </h1>
      </div>
      <div className="text">
        <p data-aos="fade-right">Os produtos da Delicia Divina são feitos com a divina culinaria mineira cheios de sabor e cor prontos para te oferecer um prazer inimaginavel !</p>
      </div>
      </div>
        
      <div className="tipos" data-aos="fade-down">
        <button onClick={() => setProductType("BOLOS")}>Bolos</button>
        <button onClick={() => setProductType("SALGADO")}>Salgados</button>
        <button onClick={() => setProductType("GELADOS")}>Gelados</button>
      </div>
      <div className="Menu">
        {produtos[ProductType].map((produto) => (
          <div key={produto.nome} data-aos="fade-right">
            <img src={produto.img} alt="" />
            <h1>{produto.nome}</h1>
            <h2>R${produto.preco}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
