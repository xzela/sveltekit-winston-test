import { log as logger } from '@baseland-io/logger';

const options = {
	level: 'debug'
};

/** @type {logger} */
export const log = (filename) => {
	return logger(filename, options);
}
