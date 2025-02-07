import type { MockOptions } from "./types.js";

/**
 * The default value for mock options.
 */
export const DEFAULT_MOCK_OPTIONS: MockOptions = {
	method: "GET",
	data: null,
	headers: new Headers(),
	response: {
		data: null,
		headers: new Headers(),
		status: 200,
	},
};
