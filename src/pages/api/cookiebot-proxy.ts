import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

async function cookiebotProxy(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch("https://consent.cookiebot.com/uc.js");
  const data = await response.text();
  res.send(data);
}

export default cookiebotProxy;