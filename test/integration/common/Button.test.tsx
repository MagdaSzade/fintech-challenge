import React from 'react';
import {render, screen} from '@testing-library/react';
import {Button} from '../../../src/Components/common/Button';

describe('<Button>', () => {
    it('should display given text and call callback function', () => {
        const mockFn = jest.fn();

        render(<Button text="Click" action={mockFn} />);

        expect(screen.getByText('Click')).toBeInTheDocument();
        screen.getByText('Click').click();

        expect(mockFn).toHaveBeenCalled();
    });

    it('should display given text but be disabled', () => {
        const mockFn = jest.fn();

        render(<Button text="Click" action={mockFn} isDisabled={true} />);

        expect(screen.getByText('Click')).toBeInTheDocument();
        screen.getByText('Click').click();

        expect(mockFn).toHaveBeenCalledTimes(0);
    });
});
