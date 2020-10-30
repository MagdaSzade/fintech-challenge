import React from 'react';
import {BasketContainer} from '../../../src/Components/BasketContainer/BasketContainer';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {ROUTES} from '../../../src/helpers/routes';
import {basketInterfaceFactory, actionInterfaceFactory, investitionsFactory} from '../../helpers/factories';

export const renderWithRouter = (ui: React.ReactNode, entries?: string[]) => {
    const history = createMemoryHistory({initialEntries: entries});
    const renderResult = render(<Router history={history}>{ui}</Router>);
    return {...renderResult, history};
};

describe('BasketConteiner', () => {
    it('should display "twój koszyk jest pusty" and button "KUP inwestyce"', () => {
        const mockFn = jest.fn();
        renderWithRouter(<BasketContainer action={mockFn} basket={basketInterfaceFactory.build()} />);
        expect(screen.getByText('Twój koszyk jest pusty')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /kup inwestycje/i})).toBeInTheDocument();
    });

    it('should redirect after click on button"', () => {
        const mockFn = jest.fn();
        const {history} = renderWithRouter(<BasketContainer action={mockFn} basket={basketInterfaceFactory.build()} />);
        userEvent.click(screen.getByRole('button', {name: /kup inwestycje/i}));
        expect(history.location.pathname).toBe(ROUTES.INVESTITIONS_LIST);
    });

    it('should render basket view when basket not empty', async () => {
        const mockFn = jest.fn();
        const investList = investitionsFactory.buildList(5);
        renderWithRouter(<BasketContainer action={mockFn} basket={basketInterfaceFactory.build({investitionsList: investList})} />);
        expect(screen.getByText('Poziom ryzyka dla twojej inwestycji wynosi:')).toBeInTheDocument();
        expect(screen.getByText('Przewidywany zysk:')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /wyczyść koszyk/i})).toBeInTheDocument();
        const initCap = await screen.findAllByText('Pierwsza wpłata:');
        expect(initCap.length).toBe(5);
    });

    it('should call action with clear action', () => {
        const mockFn = jest.fn();
        const investList = investitionsFactory.buildList(5);
        renderWithRouter(<BasketContainer action={mockFn} basket={basketInterfaceFactory.build({investitionsList: investList})} />);
        userEvent.click(screen.getByRole('button', {name: /wyczyść koszyk/i}));
        expect(mockFn).toHaveBeenCalledWith(actionInterfaceFactory.build());
    });

    it('should call action with add investition', () => {
        const mockFn = jest.fn();
        const invest = investitionsFactory.build();
        renderWithRouter(<BasketContainer action={mockFn} basket={basketInterfaceFactory.build({investitionsList: [invest]})} />);
        userEvent.click(screen.getByTestId('add'));
        expect(mockFn).toHaveBeenCalledWith(actionInterfaceFactory.build({type: 'add', payload: invest}));
    });

    it('should call action with remove investition', () => {
        const mockFn = jest.fn();
        const invest = investitionsFactory.build();
        renderWithRouter(<BasketContainer action={mockFn} basket={basketInterfaceFactory.build({investitionsList: [invest]})} />);
        userEvent.click(screen.getByTestId('del'));
        expect(mockFn).toHaveBeenCalledWith(actionInterfaceFactory.build({type: 'remove', payload: invest}));
    });
});
