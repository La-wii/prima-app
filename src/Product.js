import React from 'react'
const img = "http://www.regalopiu.com/img/w256-h256-c1:1/photo/articoli/art-d83wh4.jpg";
const nome = "puppazzo pazzo";
const prezzo = 10;
const Product = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt={nome} />
            <h2>{props.nome}</h2>
            <h4>Prezzo: {props.prezzo} €</h4>
        </div>
    )
}

export default Product


