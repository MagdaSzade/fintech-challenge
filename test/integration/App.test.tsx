import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {MemoryRouter} from 'react-router-dom';
import {App} from '../../src/Components/App';

describe('Using Navigation Buttons', () => {
    it('should render basket page', () => {
        render(<App />, {wrapper: MemoryRouter});
        userEvent.click(screen.getByRole('link', {name: /zainwestuj/i}));
        expect(screen.getByText('Ile chciałbyś na początku zainwestować?')).toBeInTheDocument();
    });
});
