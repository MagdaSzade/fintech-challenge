import React from 'react';
import {Investition} from '../../helpers/types';
import {ActionInterface} from '../../hooks/investitions/useBasket';
import {Record} from './ListOfInvestitionsRecord';
import {Action} from '../Action/Action';
import {recordContainerStyle} from './ListOfInvestitions.styles';

interface ListOfInvestitionsProps {
    records: Array<Investition>;
    basket: Array<Investition>;
    action: React.Dispatch<ActionInterface>;
}

export const ListOfInvestitions: React.FC<ListOfInvestitionsProps> = ({records, action, basket}) => {
    const listOfRecords = records.map((investition, index) => {
        return (
            <div key={investition.id} className={recordContainerStyle}>
                <Record data={investition} />
                <Action data={investition} action={action} basket={basket} />
            </div>
        );
    });

    return <div>{listOfRecords}</div>;
};
