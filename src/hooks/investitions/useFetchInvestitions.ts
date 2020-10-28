import {useCallback, useState} from 'react';
import {getInvestitions} from '../../api/investitions/investitionsApi';
import {Investition, BasicInvestition} from '../../helpers/types';

export const useFetchInvestitions = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [investitionsList, setInvestitionList] = useState<Array<Investition>>([] as Array<Investition>);

    const fetchInvestitions = useCallback(async (data: BasicInvestition) => {
        setIsFetching(true);
        try {
            const investitions = await getInvestitions(data);
            setInvestitionList(investitions.data);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        investitionsList,
        fetchInvestitions,
    };
};
