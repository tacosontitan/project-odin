import { ApiEndpoint } from "./ApiEndpoint";

/**
 * Represents an ApiEndpoint with a PATCH method.
 * @extends ApiEndpoint
 */
export class GetEndpoint extends ApiEndpoint {
        /**
     * Creates a new ApiEndpoint instance.
     * @param url The URL of the endpoint.
     * @param headers The headers of the endpoint.
     * @param body The body of the endpoint.
     */
    constructor(url: string, headers: Headers | null = null, body: any = null) {
        super(url, "PATCH", headers, null);
    }
}