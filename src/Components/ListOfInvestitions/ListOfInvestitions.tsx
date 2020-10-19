import React from 'react';
import {investition} from '../../helpers/types';
import {Record} from './ListOfInvestitionsRecord';

interface ListOfInvestitionsProps {
    records: Array<investition>;
}

export const ListOfInvestitions: React.FC<ListOfInvestitionsProps> = ({records}) => {
    const listOfRecords = records.map((investition, index) => {
        return <Record data={investition} key={index} />;
    });

    return <div>{listOfRecords}</div>;
};
