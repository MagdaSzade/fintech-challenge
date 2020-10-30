import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BasicForm} from '../../../src/Components/BasicForm/BasicForm';
import {basicInvestitionFactory} from '../../helpers/factories';
import {act} from 'react-dom/test-utils';
import {BiTargetLock} from 'react-icons/bi';

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
});
