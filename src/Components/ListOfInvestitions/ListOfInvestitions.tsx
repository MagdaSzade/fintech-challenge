import React from 'react';
import {Investition} from '../../helpers/types';
import {ActionInterface} from '../../hooks/investitions/useBasket';
import {Record} from './ListOfInvestitionsRecord';
import {Action} from './ListOfInvestitionAction';
import {recordContainerStyle} from './ListOfInvestitions.styles';

interface ListOfInvestitionsProps {
    records: Array<Investition>;
    basket: Array<Investition>;
    action: React.Dispatch<ActionInterface>;
}

export const ListOfInvestitions: React.FC<ListOfInvestitionsProps> = ({records, action, basket}) => {
    const style = records.length !== 0 ? {display: 'none'} : {};
    const listOfRecords = records.map((investition, index) => {
        return (
            <div key={investition.id} className={recordContainerStyle}>
                <Record data={investition} />
                <Action data={investition} action={action} basket={basket} />
            </div>
        );
    });

    return (
        <div>
            <p style={style}>Żadne inwestycje nie pasują do podanych kryteriów</p>
            {listOfRecords}
        </div>
    );
};
