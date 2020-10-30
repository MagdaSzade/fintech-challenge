import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BasicForm} from '../../../src/Components/BasicForm/BasicForm';
import {basicInvestitionFactory} from '../../helpers/factories';

describe('<BasicForm>', () => {
    it('should call onSubmit prop with default values', async () => {
        const onSubmit = jest.fn();
        const expectedValue = basicInvestitionFactory.build();
        render(<BasicForm onSubmit={onSubmit} />);
        userEvent.click(screen.getByRole('button', {name: /przelicz/i}));
        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith(expectedValue);
        });
    });

    it('submit button should by disabled when initialCapital not valid', async () => {
        const onSubmit = jest.fn();
        render(<BasicForm onSubmit={onSubmit} />);
        userEvent.type(screen.getByRole('textbox', {name: /ile chcesz zainwestować na początek\?/i}), '{selectall}{backspace}');
        await waitFor(() => {
            expect(screen.getByRole('button', {name: /przelicz/i})).toBeDisabled();
        });
    });

    it('should displayed error if initialCapital not valid', async () => {
        const onSubmit = jest.fn();
        render(<BasicForm onSubmit={onSubmit} />);
        userEvent.type(screen.getByRole('textbox', {name: /ile chcesz zainwestować na początek\?/i}), '{selectall}{backspace}');
        await waitFor(() => {
            expect(screen.getByText(/musi mieścić/)).toBeInTheDocument();
        });
    });

    it('submit button should by disabled when additionalCapital not valid', async () => {
        const onSubmit = jest.fn();
        render(<BasicForm onSubmit={onSubmit} />);
        userEvent.type(screen.getByRole('textbox', {name: /jaką kwotę chcesz dopłacać\?/i}), '{selectall}{backspace}');
        await waitFor(() => {
            expect(screen.getByRole('button', {name: /przelicz/i})).toBeDisabled();
        });
    });

    it('should displayed error if additionalContribiution not valid', async () => {
        const onSubmit = jest.fn();
        render(<BasicForm onSubmit={onSubmit} />);
        userEvent.type(screen.getByRole('textbox', {name: /jaką kwotę chcesz dopłacać\?/i}), '{selectall}{backspace}');
        await waitFor(() => {
            expect(screen.getByText(/musi mieścić/)).toBeInTheDocument();
        });
    });
    /*
    it('should call onSubmit prop with changed: duration, returnRate', async () => {
        const onSubmit = jest.fn();
        const expectedValue = basicInvestitionFactory.build({duration: 120, returnRate: 10});
        render(<BasicForm onSubmit={onSubmit} />);
        const sliders = await screen.findAllByRole('slider');
        //console.log(sliders[0])
        //fireEvent(sliders[0], {target: {value: 120}} )
        await userEvent.click(screen.getByRole('button', {name: /przelicz/i}));
        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith(expectedValue);
        });
    });
*/
});
