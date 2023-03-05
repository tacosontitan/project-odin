import { Workflow } from "../models/Workflow";

/**
 * Represents a service for managing workflows.
 */
export class WorkflowService {
    /**
     * Gets all workflows.
     * @param userId The id of the user to filter the workflows by.
     * @returns An array of workflows.
     */
    public get(userId: string | null = null): Workflow[] {
        return [
            new Workflow("Test", "Test", "green", "coffee"),
            new Workflow("Test 2", "Test 2", "red", "cloud-upload"),
        ];
    }
}