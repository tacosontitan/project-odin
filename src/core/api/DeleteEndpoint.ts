import { ApiEndpoint } from "./ApiEndpoint";

/**
 * Represents an ApiEndpoint with a DELETE method.
 * @extends ApiEndpoint
 */
export class DeleteEndpoint extends ApiEndpoint {
        /**
     * Creates a new ApiEndpoint instance.
     * @param url The URL of the endpoint.
     * @param headers The headers of the endpoint.
     * @param body The body of the endpoint.
     */
    constructor(url: string, headers: Headers | null = null, body: any = null) {
        super(url, "DELETE", headers, null);
    }
}