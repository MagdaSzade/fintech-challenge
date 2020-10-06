import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Button} from '../../../src/Components/Button/Button';

describe('<Button>', () => {
    it('should display given text prop', async () => {
        render(<Button>Click</Button>);
        expect(screen.getByRole('button')).toHaveTextContent('Click');
    });

    it('should render button type button if no type attribute given', () => {
        render(<Button>Click</Button>);
        expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('should render button type button if type attribute = button', () => {
        render(<Button type="button">Click</Button>);
        expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('should render button type submit if type attribute = submit', () => {
        render(<Button type="submit">Click</Button>);
        expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('should render disabled button when isDisabled prop is true', () => {
        render(<Button isDisabled={true}>Click</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should fire onClick action after click on button', () => {
        const mockFn = jest.fn();
        render(<Button onClick={mockFn}>Click</Button>);
        userEvent.click(screen.getByRole('button'));
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
