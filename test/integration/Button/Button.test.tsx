import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Button} from '../../../src/Components/Button/Button';

describe('<Button>', () => {
    it('should display given text prop', async () => {
        const mockFn = jest.fn();
        render(<Button onClick={mockFn}>Click</Button>);
        expect(screen.getByRole('button')).toHaveTextContent('Click');
    });

    it('should render disabled button when isDisabled prop is true', () => {
        const mockFn = jest.fn();
        render(
            <Button onClick={mockFn} isDisabled={true}>
                Click
            </Button>,
        );
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should fire onClick action after click on button', () => {
        const mockFn = jest.fn();
        render(<Button onClick={mockFn}>Click</Button>);
        userEvent.click(screen.getByRole('button'));
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
