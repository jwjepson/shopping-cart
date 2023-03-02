import {render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

const MockHeader = () => {
    return (
        <BrowserRouter>
            <Header cartCount={5}/>
        </BrowserRouter>
    )
}

it("displays correct cart quantity", () => {
    render(<MockHeader/>);
    const cartCounterDiv = screen.getByText("5");
    expect(cartCounterDiv).toBeInTheDocument();
});

it("displays navigation bar correctly", () => {
    render(<MockHeader/>);
    const homePageLink = screen.getByText(/home/i);
    const shopPageLink = screen.getByText(/shop/i);
    expect(homePageLink).toBeInTheDocument();
    expect(shopPageLink).toBeInTheDocument();
})
