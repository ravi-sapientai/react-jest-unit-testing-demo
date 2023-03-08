import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../Counter";

const setup = () => render(<Counter />);

describe("Increment counter should increase the number when user clicks on it", () => {
    it("Counter should start with 0", () => {
        setup();
        const counter = screen.getByTestId("counter");
        
        expect(counter).toHaveTextContent("0");
    });

    it("Counter should increase the value to 1 when user clicks one time on increment counter", () => {
        setup();
        const counter = screen.getByTestId("counter");
        const incrementBtn = screen.getByTestId("increment");

        fireEvent.click(incrementBtn);

        expect(counter).toHaveTextContent("1");
    });

    it("Counter should decrease the value to 1 when user clicks one time on decrement counter at the value of 2", () => {
        setup();
        const counter = screen.getByTestId("counter");
        const incrementBtn = screen.getByTestId("increment");
        const decrementBtn = screen.getByTestId("decrement");

        fireEvent.click(incrementBtn);
        fireEvent.click(incrementBtn);
        fireEvent.click(decrementBtn);

        expect(counter).toHaveTextContent("1");
    });
});
