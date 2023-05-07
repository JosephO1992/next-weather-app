import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = await fetch(`${process.env.API_URI_FORECAST}/daily/1day/328328?apikey=${process.env.API_KEY}`).then(response => response.json());
    // 328328
    res.json(data);

    console.log('request made', data)

}