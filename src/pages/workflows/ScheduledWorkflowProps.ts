import { Workflow } from "./models/Workflow"

export interface ScheduledWorkflowProps {
/**
 * @param id The UUID of the scheduled workflow.
 * @param time The time (UTC) the workflow is scheduled to run.
 * @param workflow The workflow to run. Temporary until we can get workflows by UUID.
*/
    id: string,
    time: string,
    workflow: Workflow,
}