import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../../../components/Header/Header";
import Card from '../../../components/Card/Card'

describe("Test the Dashboard Page", () => {
    test("render the static header component on the screen", () => {
        render(<Header />);
        const linkElement = screen.getByText('Vehicle Management System');
        expect(linkElement).toBeInTheDocument();
    });

    test("render the card component on the screen", async() => {
        render(<Card/>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(2);
    });

})

