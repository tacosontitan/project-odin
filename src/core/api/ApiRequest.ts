/**
 * Represents a single API request.
 */
export class ApiRequest {
    /**
     * Creates a new ApiRequest instance.
     * @param url The URL of the endpoint.
     * @param method The HTTP method of the endpoint.
     * @param headers The headers of the endpoint.
     * @param body The body of the endpoint.
     */
    constructor(
        public url: string,
        public method: string,
        public headers: Headers | null = null,
        public body: any = null
    ) { }
}