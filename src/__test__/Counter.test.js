import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../Counter";

const setup = () => render(<Counter />);

describe("Counter should start with 0", () => {
    it("Initial value of the counter should be 0", () => {
        setup();
        const counter = screen.getByTestId("counter");
        
        expect(counter).toHaveTextContent("0");
    });
});

describe("Increment button should increase the number when user clicks on it", () => {
    it("Counter should increase the value to 1 when user clicks one time on increment button", () => {
        setup();
        const counter = screen.getByTestId("counter");
        const incrementBtn = screen.getByTestId("increment");

        fireEvent.click(incrementBtn);

        expect(counter).toHaveTextContent("1");
    });

    it("Counter should increase the value to 2 when user clicks two times on increment button", () => {
        setup();
        const counter = screen.getByTestId("counter");
        const incrementBtn = screen.getByTestId("increment");

        fireEvent.click(incrementBtn);
        fireEvent.click(incrementBtn);

        expect(counter).toHaveTextContent("2");
    });
});

describe("Decrement button should decrease the number when user clicks on it", () => {
    it("Counter should decrease the value to 1 when user clicks one time on decrement button at the value of 2", () => {
        setup();
        const counter = screen.getByTestId("counter");
        const incrementBtn = screen.getByTestId("increment");
        const decrementBtn = screen.getByTestId("decrement");
        fireEvent.click(incrementBtn);
        fireEvent.click(incrementBtn);

        fireEvent.click(decrementBtn);

        expect(counter).toHaveTextContent("1");
    });

    it("Counter should decrease the value to 0 when user clicks one time on decrement button at the value of 1", () => {
        setup();
        const counter = screen.getByTestId("counter");
        const incrementBtn = screen.getByTestId("increment");
        const decrementBtn = screen.getByTestId("decrement");
        fireEvent.click(incrementBtn);
        
        fireEvent.click(decrementBtn);

        expect(counter).toHaveTextContent("0");
    });
});
