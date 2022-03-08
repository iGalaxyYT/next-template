import type { NextApiRequest, NextApiResponse } from 'next';

import { TimeResponse } from 'lib/types/time';

export function getTime(): TimeResponse {
	return { time: Date.now() };
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<TimeResponse>
) {
	res.status(200).json(getTime());
}
