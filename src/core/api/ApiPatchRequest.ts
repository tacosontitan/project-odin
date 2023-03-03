import { ApiRequest } from "./ApiRequest";

/**
 * Represents an ApiRequest with a PATCH method.
 * @extends ApiRequest
 */
export class ApiPatchRequest extends ApiRequest {
        /**
     * Creates a new ApiRequest instance.
     * @param url The URL of the endpoint.
     * @param headers The headers of the endpoint.
     * @param body The body of the endpoint.
     */
    constructor(url: string, headers: Headers | null = null, body: any = null) {
        super(url, "PATCH", headers, null);
    }
}