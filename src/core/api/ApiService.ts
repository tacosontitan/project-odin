import { ApiRequest } from "./ApiRequest";

export class ApiService {
    public static async send<T>(request: ApiRequest): Promise<T> {
        const response = await fetch(
                request.url, {
                method: request.method,
                headers: request.headers == null ? new Headers() : request.headers,
                body: request.body
            }
        );

        if (!response.ok)
            throw new Error(`Request failed with status code ${response.status}`);

        return response.json();
    }
}