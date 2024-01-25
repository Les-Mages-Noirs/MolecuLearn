/**
 * Represents an API class for making HTTP requests.
 */
export class API {
	/**
	 * The base URL of the API.
	 */
	static readonly BASE_URL = 'http://localhost:8000/api';

	/**
	 * Sends a GET request to the specified endpoint.
	 * @param endpoint - The endpoint to send the request to.
	 * @returns A promise that resolves to the response data.
	 */
	static async get<T>(endpoint: string): Promise<T> {
		return this.#fetch<T>([this.BASE_URL + endpoint, { method: 'GET' }]);
	}

	/**
	 * Sends a POST request to the specified endpoint.
	 * @param endpoint - The endpoint to send the request to.
	 * @param data - The data to send in the request body.
	 * @returns A promise that resolves to the response data.
	 */
	// Dans votre fichier api.ts ou là où se trouve la définition de API.post

	static async post<T>(path: string, data: any, options?: RequestInit): Promise<T> {
		const response = await fetch(path, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				...options?.headers, // fusionne les en-têtes existants avec ceux fournis dans les options
			},
			...options, // fusionne les autres options fournies
		});

		if (!response.ok) {
			throw new Error(`Fetch error: ${response.status}`);
		}

		const body = await response.json();
		return body as T;
	};
	/**
	 * Sends a PATCH request to the specified endpoint.
	 * @param endpoint - The endpoint to send the request to.
	 * @param data - The data to send in the request body.
	 * @returns A promise that resolves to the response data.
	 */
	static async patch<T>(endpoint: string, data: any): Promise<T> {
		return this.#fetch<T>([this.BASE_URL + endpoint, { method: 'PATCH', body: JSON.stringify(data) }]);
	}

	/**
	 * Sends a PUT request to the specified endpoint.
	 * @param endpoint - The endpoint to send the request to.
	 * @param data - The data to send in the request body.
	 * @returns A promise that resolves to the response data.
	 */
	static async put<T>(endpoint: string, data: any): Promise<T> {
		return this.#fetch<T>([this.BASE_URL + endpoint, { method: 'PUT', body: JSON.stringify(data) }]);
	}

	/**
	 * Sends a DELETE request to the specified endpoint.
	 * @param endpoint - The endpoint to send the request to.
	 * @returns A promise that resolves to the response data.
	 */
	static async delete<T>(endpoint: string): Promise<T> {
		return this.#fetch<T>([this.BASE_URL + endpoint, { method: 'DELETE' }]);
	}

	/**
	 * Internal method for making a fetch request.
	 * @param args - The arguments to pass to the fetch function.
	 * @returns A promise that resolves to the response data.
	 */
	static async #fetch<T>(args: Parameters<typeof fetch>): Promise<T> {
		try {
			const response = await fetch(...args);
			if (!response.ok) {
				throw new Error(`Fetch error: ${response.status}`);
			}
			return response.json() as T;
		} catch (error) {
			return Promise.reject(error);
		}
	}
}
