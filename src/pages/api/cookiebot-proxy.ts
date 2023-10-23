import { NextApiRequest, NextApiResponse } from 'next';

async function cookiebotProxy(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch("https://consent.cookiebot.com/uc.js");
  const data = await response.text();
  res.send(data);
}

export default cookiebotProxy;