import { Redis } from "@upstash/redis";

function isValidUrl(value: string): boolean {
	try {
		new URL(value);
		return true;
	} catch {
		return false;
	}
}

function createRedisClient(): Redis | null {
	const url = process.env.UPSTASH_REDIS_REST_URL;
	const token = process.env.UPSTASH_REDIS_REST_TOKEN;

	if (!url || !token || !isValidUrl(url)) {
		return null;
	}

	return new Redis({ url, token });
}

export const redis = createRedisClient();
