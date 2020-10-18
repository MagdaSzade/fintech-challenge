import React from 'react';
import {BasicForm} from '../BasicForm/BasicForm';
import {ListOfInvestitions} from '../ListOfInvestitions/ListOfInvestitions';
import {investitionsContainerStyles} from './InvestitionsContainer.styles';
import {useFetchInvestitions} from '../../hooks/useFetchInvestitions';
import {Loader} from '../Loader/Loader';

export const InvestitionsContainer: React.FC = () => {
    const {isFetching, isError, investitionsList, fetchInvestitions} = useFetchInvestitions();

    const displayList = isError ? <p>Coś poszło nie tak...</p> : <ListOfInvestitions records={investitionsList} />;

    const display = isFetching ? <Loader /> : <>{displayList}</>;

    return (
        <div className={investitionsContainerStyles}>
            <BasicForm onSubmit={fetchInvestitions} />
            {display}
        </div>
    );
};
