import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const { token, deviceId } = req.query;

  if (!token || !deviceId) {
    return res.status(400).json({ allowed: false });
  }

  // 🌍 Global check
  const usedToken = await kv.get(`token:${token}`);
  if (usedToken) {
    return res.json({ allowed: false });
  }

  // 📱 Device check
  const usedDevice = await kv.get(`device:${deviceId}`);
  if (usedDevice) {
    return res.json({ allowed: false });
  }

  // ✅ Mark used
  await kv.set(`token:${token}`, true);
  await kv.set(`device:${deviceId}`, true);

  return res.json({ allowed: true });
}