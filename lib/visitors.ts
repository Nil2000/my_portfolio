import { Redis } from "@upstash/redis";

const KEY = "visitors";

// ponytail: substring match. A phone UA like "Cubot" is treated as a bot.
// Upgrade path: an explicit bot list if that ever shows up in the count.
const BOT = /bot|crawl|spider|slurp/i;

export function shouldCountVisit(hasCookie: boolean, userAgent: string | null) {
  if (hasCookie) return false;
  return !(userAgent && BOT.test(userAgent));
}

function redis() {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    return null;
  }
  return Redis.fromEnv();
}

export async function getVisitorCount() {
  const client = redis();
  if (!client) return null;
  const count = await client.get<number>(KEY);
  return count ?? 0;
}

export async function incrementVisitors() {
  const client = redis();
  if (!client) return null;
  return client.incr(KEY);
}
