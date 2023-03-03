import { ApiRequest } from "./ApiRequest";

/**
 * Represents an ApiRequest with a POST method.
 * @extends ApiRequest
 */
export class ApiPostRequest extends ApiRequest {
        /**
     * Creates a new ApiRequest instance.
     * @param url The URL of the endpoint.
     * @param headers The headers of the endpoint.
     * @param body The body of the endpoint.
     */
    constructor(url: string, headers: Headers | null = null, body: any = null) {
        super(url, "POST", headers, null);
    }
}