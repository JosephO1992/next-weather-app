import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = await fetch(`${process.env.API_URI_LOCATIONS}/topcities/50?apikey=${process.env.API_KEY}`).then(response => response.json());

    res.json(data);

    console.log('request made', data)

}