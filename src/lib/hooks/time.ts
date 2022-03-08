import useSWR from 'swr';

import { fetcher } from 'lib/fetcher';
import { TimeResponse } from 'lib/types';

export function useTime() {
	return useSWR<TimeResponse, Error>('/api/time', fetcher);
}
