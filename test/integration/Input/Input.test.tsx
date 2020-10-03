import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Input} from '../../../src/Components/Input/Input';

describe('<Input>', () => {
    it('should display label name given in prop label', () => {
        render(<Input label="input" />);
        expect(screen.getByText('input')).toBeInTheDocument();
    });

    it('should be disabled if isDisable=true', () => {
        render(<Input label="input" isDisabled={true} />);
        expect(screen.getByLabelText('input')).toBeDisabled();
    });

    it('should not been valid if isRequired props is not given and empty filed', () => {
        render(<Input label="input" type="email" />);
        expect(screen.getByLabelText('input')).toBeInvalid();
    });

    it('should not been valid if isRequired props is true and empty filed', () => {
        render(<Input label="input" type="email" isRequired={true} />);
        expect(screen.getByLabelText('input')).toBeInvalid();
    });

    it('should have been valid if isRequired props is false and empty filed', () => {
        render(<Input label="input" type="email" isRequired={false} />);
        expect(screen.getByLabelText('input')).toBeValid();
    });

    it('should be text type if no prop type present', () => {
        render(<Input label="input" />);
        expect(screen.getByLabelText('input')).toHaveAttribute('type', 'text');
    });

    it('should be text type if prop type=text', () => {
        render(<Input label="input" type="text" />);
        expect(screen.getByLabelText('input')).toHaveAttribute('type', 'text');
    });

    it('should be email type if prop type=email', () => {
        render(<Input label="input" type="email" />);
        expect(screen.getByLabelText('input')).toHaveAttribute('type', 'email');
    });

    it('should not been valid if given data without @ and props type="email"', async () => {
        render(<Input label="input" type="email" />);
        userEvent.type(screen.getByRole('textbox'), 'testdata');
        expect(screen.getByLabelText('input')).toBeInvalid();
    });

    it('should been valid when given correct format of email and props type="email"', () => {
        render(<Input label="input" type="email" />);
        userEvent.type(screen.getByRole('textbox'), 'test@test.pl');
        expect(screen.getByLabelText('input')).toBeValid();
    });

    it('should be number type if prop type=number', () => {
        render(<Input label="input" type="number" />);
        expect(screen.getByLabelText('input')).toHaveAttribute('type', 'number');
    });

    it('should be password type if prop type=password', () => {
        render(<Input label="input" type="password" />);
        expect(screen.getByLabelText('input')).toHaveAttribute('type', 'password');
    });
});
