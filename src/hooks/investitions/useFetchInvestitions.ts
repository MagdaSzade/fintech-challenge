import {useCallback, useState} from 'react';
import {getInvestitions} from '../../api/investitions/investitionsApi';
import {Investition, BasicInvestition} from '../../helpers/types';

interface ReturnType {
    isFetching: boolean;
    isError: boolean;
    investitionsList: Array<Investition>;
    fetchInvestitions: (data: BasicInvestition) => Promise<void>;
}

export const useFetchInvestitions = (): ReturnType => {
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
            setInvestitionList([]);
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
