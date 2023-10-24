import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

async function cookiebotProxy(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://consent.cookiebot.com/uc.js');
    const data = await response.text();

    res.setHeader('Content-Type', 'application/javascript'); // Set the Content-Type header
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

export default cookiebotProxy;