import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {MemoryRouter} from 'react-router-dom';
import {App} from '../../../src/Components/App/App';

describe('Using Navigation Buttons', () => {
    it('should render investition page', () => {
        render(<App />, {wrapper: MemoryRouter});
        userEvent.click(screen.getByRole('link', {name: /zainwestuj/i}));
        expect(screen.getByText('Ile chcesz zainwestować na początek?')).toBeInTheDocument();
    });
});
