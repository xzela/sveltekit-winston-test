import * as url from 'url';

/**
 * Converts a uri into a path
 *
 * @param {string} uri
 *
 * @returns {string}
 */
export function filename(uri) {
	return url.fileURLToPath(uri)
};
