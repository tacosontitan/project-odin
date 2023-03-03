import { ApiEndpoint } from "./ApiRequest";

/**
 * Represents an ApiEndpoint with a POST method.
 * @extends ApiEndpoint
 */
export class PostEndpoint extends ApiEndpoint {
        /**
     * Creates a new ApiEndpoint instance.
     * @param url The URL of the endpoint.
     * @param headers The headers of the endpoint.
     * @param body The body of the endpoint.
     */
    constructor(url: string, headers: Headers | null = null, body: any = null) {
        super(url, "POST", headers, null);
    }
}