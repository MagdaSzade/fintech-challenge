import {render, screen} from '@testing-library/react';
import {App} from '../../src/Components/App';
import React from 'react';

describe('<App/>', () => {
    test('renders welcome dummy text', () => {
        render(<App />);

        expect(screen.getByRole('heading')).toHaveTextContent('Good luck in developing Calculator app!');
    });
});
