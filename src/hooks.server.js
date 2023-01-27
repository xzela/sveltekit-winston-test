import { filename } from './utils/meta';
import { log } from './utils/logger';

const __filename = filename(import.meta.url);
const logger = log(__filename, { level: 'debug'});

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	logger.info(event.request.url);
	const response = await resolve(event);
	return response;
  }
