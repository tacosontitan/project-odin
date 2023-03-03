/**
 * Represents a single API endpoint.
 */
export class ApiEndpoint {
    /**
     * Creates a new ApiEndpoint instance.
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