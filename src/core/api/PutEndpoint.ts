import { ApiEndpoint } from "./ApiEndpoint";

/**
 * Represents an ApiEndpoint with a PUT method.
 * @extends ApiEndpoint
 */
export class PutEndpoint extends ApiEndpoint {
        /**
     * Creates a new ApiEndpoint instance.
     * @param url The URL of the endpoint.
     * @param headers The headers of the endpoint.
     * @param body The body of the endpoint.
     */
    constructor(url: string, headers: Headers | null = null, body: any = null) {
        super(url, "PUT", headers, null);
    }
}