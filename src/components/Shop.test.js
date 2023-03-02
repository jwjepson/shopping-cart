import {getByTestId, render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import Shop from "./Shop";

it("adds an item to cart when the add to cart button is clicked", () => {
    const addItemToCartMock = jest.fn();
    render(<Shop addItemToCart={addItemToCartMock}/>)
    const addToCartButtons = screen.getAllByTestId("addCartButton");
    userEvent.click(addToCartButtons[0]);
    expect(addItemToCartMock).toHaveBeenCalledWith({
        name: "Donut 1",
        price: 5.35,
        img: "donut1.png",
        id: 1,
    });
});

it("renders the correct amount of items in shop", () => {
    render(<Shop/>);
    const items = screen.getAllByTestId("item-container");
    expect(items.length).toBe(5);
});