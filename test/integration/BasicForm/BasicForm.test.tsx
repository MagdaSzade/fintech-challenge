import React from 'react';
import {render, screen} from '@testing-library/react';
import {BasicForm} from '../../../src/Components/BasicForm/BasicForm';
import userEvent from '@testing-library/user-event';
import {Formik} from 'formik';

describe('<BasicForm>', () => {
    it('should render 4 sliders elements"', () => {
        render(<BasicForm />);
        expect(screen.getAllByRole('slider').length).toBe(4);
    });

    //    it('should submit form after click', () => {
    //          ???
    //    });
    //
    //    it('should submit with changed values', () => {
    //          ???
    //    });
    //
});
