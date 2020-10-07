import React from 'react';
import {render, screen} from '@testing-library/react';
import {Slider} from '../../../src/Components/Slider/Slider';

describe('<SliderInput>', () => {
    let testValue = '5';
    const handleChange = (e: React.ChangeEvent<any>): void => {
        testValue = e.target.value;
    };

    it('should have label with given name', () => {
        render(<Slider label="test" sliderName="test" sliderValue={testValue} setSliderValue={handleChange} />);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    it('should have starting value equal to given one', () => {
        render(<Slider label="test" sliderName="test" sliderValue={testValue} setSliderValue={handleChange} />);
        expect(screen.getByRole('slider')).toHaveAttribute('value', '5');
    });

    it('should display min value = 0 at default', () => {
        render(<Slider label="test" sliderName="test" sliderValue={testValue} setSliderValue={handleChange} />);
        expect(screen.getByText('0%')).toBeInTheDocument();
    });

    it('should display min value = 3 when given min=3', () => {
        render(<Slider label="test" sliderName="test" sliderValue={testValue} setSliderValue={handleChange} min={3} />);
        expect(screen.getByText('3%')).toBeInTheDocument();
    });

    it('should display max value = 10 at default', () => {
        render(<Slider label="test" sliderName="test" sliderValue={testValue} setSliderValue={handleChange} />);
        expect(screen.getByText('10%')).toBeInTheDocument();
    });

    it('should display max value=15 when given max=15', () => {
        render(<Slider label="test" sliderName="test" sliderValue={testValue} setSliderValue={handleChange} max={15} />);
        expect(screen.getByText('15%')).toBeInTheDocument();
    });

    it('should have display % sign at default', async () => {
        render(<Slider label="test" sliderName="test" sliderValue={testValue} setSliderValue={handleChange} />);
        const result = await screen.findAllByText(/\%/);
        expect(result.length).toBe(3);
    });

    it('should have display "zł" if sign = "zł"', async () => {
        render(<Slider label="test" sliderName="test" sliderValue={testValue} setSliderValue={handleChange} sign="??" />);
        const result = await screen.findAllByText(/[??]/);
        expect(result.length).toBe(3);
    });

    //it('should change displayed value after slide', () => {
    //???!!!???
    //});
});
