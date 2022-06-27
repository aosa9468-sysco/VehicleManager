import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../../../components/Header/Header";
import Card from '../../../components/Card/Card'

describe("Test the Dashboard Page", () => {
    test("render the header page title", () => {
        render(<Header />);
        const linkElement = screen.getByText('Vehicle Management System');
        expect(linkElement).toBeInTheDocument();
    });

    test("render the header description ", () => {
        render(<Header />);
        const description = screen.getByText('Everything at your fingertips');
        expect(description).toBeInTheDocument();
    });

    test("render the header sub description ", () => {
        render(<Header />);
        const subDescription = screen.getByText('by VOLVO Global Digital');
        expect(subDescription).toBeInTheDocument();
    });

    test("render the card component's buttons on the screen", async() => {
        render(<Card/>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(2);
    });

    test("render the card component's vehicle name attribute", () => {
        render(<Card/>);
        const vehiclName = screen.getByText('Vechicle Name');
        expect(vehiclName).toBeInTheDocument();
    });

    test("render the card component's licence Plate attribute", () => {
        render(<Card/>);
        const licencePlate = screen.getByText('licence Plate');
        expect(licencePlate).toBeInTheDocument();
    });

})

