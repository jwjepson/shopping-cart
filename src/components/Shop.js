import React from "react";
import Item from "./Item";
import "../styles/Shop.css";
import Donut1 from "../images/donut1.png";
import Donut2 from "../images/donut2.png";
import Donut3 from "../images/donut3.png";
import Donut4 from "../images/donut4.png";
import Donut5 from "../images/donut5.png";


const Shop = () => {
    const items = [
        {
            name: "Donut 1",
            price: "$5.30",
            img: Donut1,
            id: 1,
        },
        {
            name: "Donut 2",
            price: "$4.30",
            img: Donut2,
            id: 2,
        },
        {
            name: "Donut 3",
            price: "$3.50",
            img: Donut3,
            id: 3,
        },
        {
            name: "Donut 4",
            price: "$6.20",
            img: Donut4,
            id: 4,
        },
        {
            name: "Donut 5",
            price: "$5.50",
            img: Donut5,
            id: 5,
        }
    ];

    return (
        <div className="main">
            <div className="menu">
                <h2>Welcome to the Shop!</h2>
                <div className="items">
                    {items.map((item) => (
                        <Item name={item.name} price={item.price} img={item.img} key={item.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop;