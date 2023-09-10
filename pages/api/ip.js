
export default function handler(req, res) {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.status(200).json({ clientIp });
  }