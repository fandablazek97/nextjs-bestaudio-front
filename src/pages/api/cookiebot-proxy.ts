import { NextApiRequest, NextApiResponse } from 'next';

async function cookiebotProxy(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://consent.cookiebot.com/uc.js');
    const scriptText = await response.text();
    res.setHeader('Content-Type', 'text/javascript');
    res.status(200).send(scriptText);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the CookieBot script.' });
  }
}

export default cookiebotProxy;