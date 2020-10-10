import React from 'react';
import {render, screen} from '@testing-library/react';
import {BasicForm} from '../../../src/Components/BasicForm/BasicForm';

describe('<BasicForm>', () => {
    it('should render 2 sliders elements"', () => {
        render(<BasicForm />);
        expect(screen.getAllByRole('slider').length).toBe(2);
    });

    it('should render 2 input type number elements"', () => {
        render(<BasicForm />);
        expect(screen.getAllByRole('spinbutton').length).toBe(2);
    });

    it('should render 4 radio buttons"', () => {
        render(<BasicForm />);
        expect(screen.getAllByRole('radio').length).toBe(4);
    });

    it('should render 1 submit button"', () => {
        render(<BasicForm />);
        expect(screen.getAllByRole('button').length).toBe(1);
    });
});
