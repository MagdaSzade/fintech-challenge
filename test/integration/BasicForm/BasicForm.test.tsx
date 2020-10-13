import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BasicForm} from '../../../src/Components/BasicForm/BasicForm';

describe('<BasicForm>', () => {
    it('should call onSubmit prop with default values', async () => {
        const onSubmit = jest.fn();
        const expectedValue = {
            firstDeposit: 10000,
            durationInYears: 60,
            depositFrequency: 'MONTH',
            systematicPayments: 100,
            returnOnInvestment: 5,
        };
        render(<BasicForm onSubmit={onSubmit} />);
        userEvent.click(screen.getByRole('button', {name: /przelicz/i}));
        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith(expectedValue);
        });
    });

    it('should call onSubmit with changedValues', async () => {
        const mockFn = jest.fn();
        const expectedValue = {
            firstDeposit: 1000030,
            durationInYears: 60,
            depositFrequency: 'MONTH',
            systematicPayments: 100,
            returnOnInvestment: 5,
        };
        render(<BasicForm onSubmit={mockFn} />);
        userEvent.type(screen.getByRole('spinbutton', {name: /ile chciałbyś na początku zainwestować\?/i}), '30');
        userEvent.click(screen.getByRole('button', {name: /przelicz/i}));
        await waitFor(() => {
            expect(mockFn).toHaveBeenCalledWith(expectedValue);
        });
    });
    //todo: write test for changing other values.
});
