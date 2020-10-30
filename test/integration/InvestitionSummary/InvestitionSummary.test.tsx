import {render, screen} from '@testing-library/react';
import React from 'react';
import {InvestitionSummary} from '../../../src/Components/InvestitionSummary/InvestitionSummary';

describe('DisplayInvestition', () => {
    it('should displeyed formatted value of investition parameters', () => {
        render(<InvestitionSummary riskFactor={3} total={60000} capital={50000} />);
        expect(screen.getByText(/50,000.00/)).toBeInTheDocument();
        expect(screen.getByText(/10,000.00/)).toBeInTheDocument();
    });
});
