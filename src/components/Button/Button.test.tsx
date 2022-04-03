import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";


test('should have initial red color', () => { 
    render(<Button />);
    let elem = screen.getByRole('button', {name: 'Change color to blue'});

    expect( elem.classList.contains('red') ).toBeTruthy();
});

test('should have blue color on click', () => { 
    render(<Button />);
    let elem = screen.getByRole('button', {name: 'Change color to blue'});

    fireEvent.click(elem);
    expect( elem.classList.contains('blue') ).toBeTruthy();
});