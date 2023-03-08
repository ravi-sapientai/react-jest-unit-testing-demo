import { render, screen } from '@testing-library/react';
import App from '../App';

const setup = () => render(<App />);

describe('Home page should render with UI elements', () => {
    it('Home page should contain React logo', () => {
      setup();
      const reactLogo = screen.getByTestId("logo");
      
      expect(reactLogo).toBeInTheDocument();
    });

    it('Home page should contain "Learn React" link', () => {
      setup();
      const learnReactLink = screen.getByTestId("app-link");

      expect(learnReactLink).toBeInTheDocument();
    });

    it('"Learn React" link should navigate to ReactJs official web page', () => {
      setup();
      const learnReactLink = screen.getByTestId("app-link");

      expect(learnReactLink.href).toEqual("https://reactjs.org/");
    });
});