import "server-only";

/**
 * Fixed-window, in-memory rate limiter: 5 submissions per IP per 10 minutes (SRS FR-LEAD-10).
 * In-memory state is per server process; with more than one instance move this to Redis.
 */
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

export function allowRequest(key: string, now = Date.now()): boolean {
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
  }
  const entry = hits.get(key);
  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  entry.count += 1;
  return entry.count <= LIMIT;
}
