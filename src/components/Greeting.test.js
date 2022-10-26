import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";


describe('Greeting component', () => { // defining the test suite

    test('renders Hello as text', () => {
        //Arrange
        render(<Greeting />);
    
        //Act
        // nothing here..
    
        // Assert
        const helloEl = screen.getByText('Hello');
    
        expect(helloEl).toBeInTheDocument();
    })

    test('renders unchanged text before click', () => {
        // Arrange
        render(<Greeting />);
        
        // Act
        // nothing here..
        
        // Assert
        const unchangedEl = screen.getByText('I\'m the same :)');
        expect(unchangedEl).toBeInTheDocument();
    })

    test('renders changed text after click', () => {
        // Arrange
        render(<Greeting />);
        
        // Act
        const buttonEl = screen.getByRole('button');
        userEvent.click(buttonEl);
        
        // Assert
        const changedEl = screen.getByText('I changed :(');
        expect(changedEl).toBeInTheDocument();
    })

    test('removes unchanged text after click', () => {
        // Arrange
        render(<Greeting />);
        
        // Act
        const buttonEl = screen.getByRole('button');
        userEvent.click(buttonEl);
        
        // Assert
        const unchangedEl = screen.queryByText('I\'m the same :)');
        expect(unchangedEl).not.toBeInTheDocument();
    })

});

