import React from 'react';
import {Header} from '../../../src/Components/Header/Header';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {ROUTES} from '../../../src/helpers/routes';

export const renderWithRouter = (ui: React.ReactNode, entries?: string[]) => {
    const history = createMemoryHistory({initialEntries: entries});
    const renderResult = render(<Router history={history}>{ui}</Router>);
    return {...renderResult, history};
};

describe('Header component', () => {
    it('should displayed logo and 3 buttons', async () => {
        renderWithRouter(<Header />);
        expect(screen.getByText('Inwestuj z CareBear')).toBeInTheDocument();
        const buttons = await screen.findAllByRole('link');
        expect(buttons.length).toBe(3);
    });

    it('should changed rout after clicking on "zainwestuj"', async () => {
        const {history} = renderWithRouter(<Header />);
        const buttons = await screen.findAllByRole('link');
        await userEvent.click(buttons[0]);
        expect(history.location.pathname).toBe(ROUTES.INVESTITIONS_LIST);
    });

    it('should changed rout after clicking on "basket"', async () => {
        const {history} = renderWithRouter(<Header />);
        const buttons = await screen.findAllByRole('link');
        await userEvent.click(buttons[1]);
        expect(history.location.pathname).toBe(ROUTES.BASKET);
    });

    it('should changed rout after clicking on "home"', async () => {
        const {history} = renderWithRouter(<Header />);
        const buttons = await screen.findAllByRole('link');
        await userEvent.click(buttons[2]);
        expect(history.location.pathname).toBe(ROUTES.PROJECTED_PROFIT);
    });
});
