import {render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import Cart from "./Cart";

it("correctly displays empty cart", () => {
    render(<Cart handleQuantity={jest.fn()} cartItems={[]}/>);
    const emptyCartDiv = screen.getByText("Your cart is empty");
    expect(emptyCartDiv).toBeInTheDocument();
});

it("correctly renders cart item to the cart", () => {
    const cartItems = [
        {
            name: "Donut 1",
            price: 5.35,
            id: 1,
        },
    ];
    render(<Cart handleQuantity={jest.fn()} cartItems={cartItems}/>);
    const itemDiv = screen.getByText("Donut 1");
    expect(itemDiv).toBeInTheDocument();
});

it("correctly calculates total price", () => {
    const cartItems = [
        {
            name: "Donut 1",
            price: 5.35,
            quantity: 1,
            id: 1,
        },
        {
            name: "Donut 2",
            price: 4.30,
            quantity: 1,
            id: 2,
        },
    ];
    render(<Cart handleQuantity={jest.fn()} cartItems={cartItems}/>);
    const totalPriceDiv = screen.getByTestId("total-price");
    expect(totalPriceDiv.textContent).toBe("$9.65");
})