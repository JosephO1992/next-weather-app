import useSWR from "swr";
import { fetcher } from './fetcher'

export const useLondon = () => {
    const { data, error } = useSWR("/api/london", fetcher);

    return {
        data: data,
        isLoading: !data && !error,
        isError: error,
    };
};
